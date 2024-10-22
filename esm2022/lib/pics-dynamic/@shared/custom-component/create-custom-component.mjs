// @ts-nocheck
import { Components, Utils as FormioUtils } from 'formiojs';
import { clone, isArray, isNil } from 'lodash';
const BaseInputComponent = Components.components.input;
const TextfieldComponent = Components.components.textfield;
export function createCustomFormioComponent(customComponentOptions) {
    return class CustomComponent extends BaseInputComponent {
        component;
        static editForm = customComponentOptions.editForm || TextfieldComponent.editForm;
        id = FormioUtils.getRandomComponentId();
        type = customComponentOptions.type;
        _customAngularElement;
        static schema() {
            return BaseInputComponent.schema({
                ...customComponentOptions.schema,
                type: customComponentOptions.type,
            });
        }
        get defaultSchema() {
            return CustomComponent.schema();
        }
        get emptyValue() {
            return customComponentOptions.emptyValue || null;
        }
        static get builderInfo() {
            return {
                title: customComponentOptions.title,
                group: customComponentOptions.group,
                icon: customComponentOptions.icon,
                weight: customComponentOptions.weight,
                documentation: customComponentOptions.documentation,
                schema: CustomComponent.schema(),
            };
        }
        constructor(component, options, data) {
            super(component, {
                ...options,
                sanitizeConfig: {
                    addTags: [customComponentOptions.selector],
                },
            }, data);
            this.component = component;
            if (customComponentOptions.extraValidators) {
                this.validators = this.validators.concat(customComponentOptions.extraValidators);
            }
        }
        elementInfo() {
            const info = super.elementInfo();
            info.type = customComponentOptions.selector;
            info.changeEvent = customComponentOptions.changeEvent || 'valueChange';
            info.attr = {
                ...info.attr,
                class: info.attr.class.replace('form-control', 'form-control-custom-field') // remove the form-control class as the custom angular component may look different
            };
            return info;
        }
        get inputInfo() {
            const info = {
                id: this.key,
                ...this.elementInfo()
            };
            return info;
        }
        renderElement(value, index) {
            const info = this.inputInfo;
            return this.renderTemplate(customComponentOptions.template || 'input', {
                input: info,
                value,
                index
            });
        }
        attach(element) {
            let superAttach = super.attach(element);
            this._customAngularElement = element.querySelector(customComponentOptions.selector);
            // Bind the custom options and the validations to the Angular component's inputs (flattened)
            if (this._customAngularElement) {
                // To make sure we have working input in IE...
                // IE doesn't render it properly if it's not visible on the screen
                // due to the whole structure applied via innerHTML to the parent
                // so we need to use appendChild
                if (!this._customAngularElement.getAttribute('ng-version')) {
                    this._customAngularElement.removeAttribute('ref');
                    const newCustomElement = document.createElement(customComponentOptions.selector);
                    newCustomElement.setAttribute('ref', 'input');
                    Object.keys(this.inputInfo.attr).forEach((attr) => {
                        newCustomElement.setAttribute(attr, this.inputInfo.attr[attr]);
                    });
                    this._customAngularElement.appendChild(newCustomElement);
                    this._customAngularElement = newCustomElement;
                    superAttach = super.attach(element);
                }
                // Bind customOptions
                for (const key in this.component.customOptions) {
                    if (this.component.customOptions.hasOwnProperty(key)) {
                        this._customAngularElement[key] = this.component.customOptions[key];
                    }
                }
                // Bind validate options
                for (const key in this.component.validate) {
                    if (this.component.validate.hasOwnProperty(key)) {
                        this._customAngularElement[key] = this.component.validate[key];
                    }
                }
                // Bind options explicitly set
                const fieldOptions = customComponentOptions.fieldOptions;
                if (isArray(fieldOptions) && fieldOptions.length > 0) {
                    for (const key in fieldOptions) {
                        if (fieldOptions.hasOwnProperty(key)) {
                            this._customAngularElement[fieldOptions[key]] = this.component[fieldOptions[key]];
                        }
                    }
                }
                // Attach event listener for emit event
                this._customAngularElement.addEventListener('formioEvent', (event) => {
                    this.emit(event.detail.eventName, {
                        ...event.detail.data,
                        component: this.component
                    });
                });
                // Ensure we bind the value (if it isn't a multiple-value component with no wrapper)
                if (!this._customAngularElement.value && !this.component.disableMultiValueWrapper) {
                    this.restoreValue();
                }
            }
            return superAttach;
        }
        // Add extra option to support multiple value (e.g. datagrid) with single angular component (disableMultiValueWrapper)
        useWrapper() {
            return this.component.hasOwnProperty('multiple') && this.component.multiple && !this.component.disableMultiValueWrapper;
        }
        get defaultValue() {
            let defaultValue = this.emptyValue;
            // handle falsy default value
            if (!isNil(this.component.defaultValue)) {
                defaultValue = this.component.defaultValue;
            }
            if (this.component.customDefaultValue && !this.options.preview) {
                defaultValue = this.evaluate(this.component.customDefaultValue, { value: '' }, 'value');
            }
            return clone(defaultValue);
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWN1c3RvbS1jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvZHluYW1pYy9zcmMvbGliL3BpY3MtZHluYW1pYy9Ac2hhcmVkL2N1c3RvbS1jb21wb25lbnQvY3JlYXRlLWN1c3RvbS1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYztBQUNkLE9BQU8sRUFBZSxVQUFVLEVBQTJCLEtBQUssSUFBSSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFbEcsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRS9DLE1BQU0sa0JBQWtCLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7QUFDdkQsTUFBTSxrQkFBa0IsR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztBQUUzRCxNQUFNLFVBQVUsMkJBQTJCLENBQUMsc0JBQWlEO0lBQzNGLE9BQU8sTUFBTSxlQUFnQixTQUFRLGtCQUFrQjtRQWdDbEM7UUEvQm5CLE1BQU0sQ0FBQyxRQUFRLEdBQUcsc0JBQXNCLENBQUMsUUFBUSxJQUFJLGtCQUFrQixDQUFDLFFBQVEsQ0FBQztRQUNqRixFQUFFLEdBQUcsV0FBVyxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDeEMsSUFBSSxHQUFHLHNCQUFzQixDQUFDLElBQUksQ0FBQztRQUNuQyxxQkFBcUIsQ0FBc0I7UUFFM0MsTUFBTSxDQUFDLE1BQU07WUFDWCxPQUFPLGtCQUFrQixDQUFDLE1BQU0sQ0FBQztnQkFDL0IsR0FBRyxzQkFBc0IsQ0FBQyxNQUFNO2dCQUNoQyxJQUFJLEVBQUUsc0JBQXNCLENBQUMsSUFBSTthQUNsQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBRUQsSUFBSSxhQUFhO1lBQ2YsT0FBTyxlQUFlLENBQUMsTUFBTSxFQUFFLENB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QUM7UUFFRCxJQUFJLFlBQVk7WUFDZCxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBRW5DLDZCQUE2QjtZQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQ3ZDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQzthQUM1QztZQUVELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFO2dCQUM5RCxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsRUFDakMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQ2IsT0FBTyxDQUNSLENBQUM7YUFDSDtZQUVELE9BQU8sS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzdCLENBQUM7S0FDRixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1ub2NoZWNrXHJcbmltcG9ydCB7IEJ1aWxkZXJJbmZvLCBDb21wb25lbnRzLCBFeHRlbmRlZENvbXBvbmVudFNjaGVtYSwgVXRpbHMgYXMgRm9ybWlvVXRpbHMgfSBmcm9tICdmb3JtaW9qcyc7XHJcbmltcG9ydCB7IEZvcm1pb0N1c3RvbUNvbXBvbmVudEluZm8sIEZvcm1pb0N1c3RvbUVsZW1lbnQsIEZvcm1pb0V2ZW50IH0gZnJvbSAnLi9lbGVtZW50cy5jb21tb24nO1xyXG5pbXBvcnQgeyBjbG9uZSwgaXNBcnJheSwgaXNOaWwgfSBmcm9tICdsb2Rhc2gnO1xyXG5cclxuY29uc3QgQmFzZUlucHV0Q29tcG9uZW50ID0gQ29tcG9uZW50cy5jb21wb25lbnRzLmlucHV0O1xyXG5jb25zdCBUZXh0ZmllbGRDb21wb25lbnQgPSBDb21wb25lbnRzLmNvbXBvbmVudHMudGV4dGZpZWxkO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUN1c3RvbUZvcm1pb0NvbXBvbmVudChjdXN0b21Db21wb25lbnRPcHRpb25zOiBGb3JtaW9DdXN0b21Db21wb25lbnRJbmZvKSB7XHJcbiAgcmV0dXJuIGNsYXNzIEN1c3RvbUNvbXBvbmVudCBleHRlbmRzIEJhc2VJbnB1dENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgZWRpdEZvcm0gPSBjdXN0b21Db21wb25lbnRPcHRpb25zLmVkaXRGb3JtIHx8IFRleHRmaWVsZENvbXBvbmVudC5lZGl0Rm9ybTtcclxuICAgIGlkID0gRm9ybWlvVXRpbHMuZ2V0UmFuZG9tQ29tcG9uZW50SWQoKTtcclxuICAgIHR5cGUgPSBjdXN0b21Db21wb25lbnRPcHRpb25zLnR5cGU7XHJcbiAgICBfY3VzdG9tQW5ndWxhckVsZW1lbnQ6IEZvcm1pb0N1c3RvbUVsZW1lbnQ7XHJcblxyXG4gICAgc3RhdGljIHNjaGVtYSgpIHtcclxuICAgICAgcmV0dXJuIEJhc2VJbnB1dENvbXBvbmVudC5zY2hlbWEoe1xyXG4gICAgICAgIC4uLmN1c3RvbUNvbXBvbmVudE9wdGlvbnMuc2NoZW1hLFxyXG4gICAgICAgIHR5cGU6IGN1c3RvbUNvbXBvbmVudE9wdGlvbnMudHlwZSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGRlZmF1bHRTY2hlbWEoKSB7XHJcbiAgICAgIHJldHVybiBDdXN0b21Db21wb25lbnQuc2NoZW1hKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGVtcHR5VmFsdWUoKSB7XHJcbiAgICAgIHJldHVybiBjdXN0b21Db21wb25lbnRPcHRpb25zLmVtcHR5VmFsdWUgfHwgbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IGJ1aWxkZXJJbmZvKCk6IEJ1aWxkZXJJbmZvIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZTogY3VzdG9tQ29tcG9uZW50T3B0aW9ucy50aXRsZSxcclxuICAgICAgICBncm91cDogY3VzdG9tQ29tcG9uZW50T3B0aW9ucy5ncm91cCxcclxuICAgICAgICBpY29uOiBjdXN0b21Db21wb25lbnRPcHRpb25zLmljb24sXHJcbiAgICAgICAgd2VpZ2h0OiBjdXN0b21Db21wb25lbnRPcHRpb25zLndlaWdodCxcclxuICAgICAgICBkb2N1bWVudGF0aW9uOiBjdXN0b21Db21wb25lbnRPcHRpb25zLmRvY3VtZW50YXRpb24sXHJcbiAgICAgICAgc2NoZW1hOiBDdXN0b21Db21wb25lbnQuc2NoZW1hKCksXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGNvbXBvbmVudDogRXh0ZW5kZWRDb21wb25lbnRTY2hlbWEsIG9wdGlvbnM6IGFueSwgZGF0YTogYW55KSB7XHJcbiAgICAgIHN1cGVyKGNvbXBvbmVudCwge1xyXG4gICAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgICAgc2FuaXRpemVDb25maWc6IHtcclxuICAgICAgICAgIGFkZFRhZ3M6IFtjdXN0b21Db21wb25lbnRPcHRpb25zLnNlbGVjdG9yXSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LCBkYXRhKTtcclxuXHJcbiAgICAgIGlmIChjdXN0b21Db21wb25lbnRPcHRpb25zLmV4dHJhVmFsaWRhdG9ycykge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdG9ycyA9IHRoaXMudmFsaWRhdG9ycy5jb25jYXQoY3VzdG9tQ29tcG9uZW50T3B0aW9ucy5leHRyYVZhbGlkYXRvcnMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudEluZm8oKSB7XHJcbiAgICAgIGNvbnN0IGluZm8gPSBzdXBlci5lbGVtZW50SW5mbygpO1xyXG4gICAgICBpbmZvLnR5cGUgPSBjdXN0b21Db21wb25lbnRPcHRpb25zLnNlbGVjdG9yO1xyXG4gICAgICBpbmZvLmNoYW5nZUV2ZW50ID0gY3VzdG9tQ29tcG9uZW50T3B0aW9ucy5jaGFuZ2VFdmVudCB8fCAndmFsdWVDaGFuZ2UnO1xyXG4gICAgICBpbmZvLmF0dHIgPSB7XHJcbiAgICAgICAgLi4uaW5mby5hdHRyLFxyXG4gICAgICAgIGNsYXNzOiBpbmZvLmF0dHIuY2xhc3MucmVwbGFjZSgnZm9ybS1jb250cm9sJywgJ2Zvcm0tY29udHJvbC1jdXN0b20tZmllbGQnKSAvLyByZW1vdmUgdGhlIGZvcm0tY29udHJvbCBjbGFzcyBhcyB0aGUgY3VzdG9tIGFuZ3VsYXIgY29tcG9uZW50IG1heSBsb29rIGRpZmZlcmVudFxyXG4gICAgICB9O1xyXG4gICAgICByZXR1cm4gaW5mbztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaW5wdXRJbmZvKCkge1xyXG4gICAgICBjb25zdCBpbmZvID0ge1xyXG4gICAgICAgIGlkOiB0aGlzLmtleSxcclxuICAgICAgICAuLi50aGlzLmVsZW1lbnRJbmZvKClcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaW5mbztcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJFbGVtZW50KHZhbHVlOiBhbnksIGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgY29uc3QgaW5mbyA9IHRoaXMuaW5wdXRJbmZvO1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJUZW1wbGF0ZShjdXN0b21Db21wb25lbnRPcHRpb25zLnRlbXBsYXRlIHx8ICdpbnB1dCcsIHtcclxuICAgICAgICBpbnB1dDogaW5mbyxcclxuICAgICAgICB2YWx1ZSxcclxuICAgICAgICBpbmRleFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhdHRhY2goZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgbGV0IHN1cGVyQXR0YWNoID0gc3VwZXIuYXR0YWNoKGVsZW1lbnQpO1xyXG5cclxuICAgICAgdGhpcy5fY3VzdG9tQW5ndWxhckVsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoY3VzdG9tQ29tcG9uZW50T3B0aW9ucy5zZWxlY3Rvcik7XHJcblxyXG4gICAgICAvLyBCaW5kIHRoZSBjdXN0b20gb3B0aW9ucyBhbmQgdGhlIHZhbGlkYXRpb25zIHRvIHRoZSBBbmd1bGFyIGNvbXBvbmVudCdzIGlucHV0cyAoZmxhdHRlbmVkKVxyXG4gICAgICBpZiAodGhpcy5fY3VzdG9tQW5ndWxhckVsZW1lbnQpIHtcclxuICAgICAgICAvLyBUbyBtYWtlIHN1cmUgd2UgaGF2ZSB3b3JraW5nIGlucHV0IGluIElFLi4uXHJcbiAgICAgICAgLy8gSUUgZG9lc24ndCByZW5kZXIgaXQgcHJvcGVybHkgaWYgaXQncyBub3QgdmlzaWJsZSBvbiB0aGUgc2NyZWVuXHJcbiAgICAgICAgLy8gZHVlIHRvIHRoZSB3aG9sZSBzdHJ1Y3R1cmUgYXBwbGllZCB2aWEgaW5uZXJIVE1MIHRvIHRoZSBwYXJlbnRcclxuICAgICAgICAvLyBzbyB3ZSBuZWVkIHRvIHVzZSBhcHBlbmRDaGlsZFxyXG4gICAgICAgIGlmICghdGhpcy5fY3VzdG9tQW5ndWxhckVsZW1lbnQuZ2V0QXR0cmlidXRlKCduZy12ZXJzaW9uJykpIHtcclxuICAgICAgICAgIHRoaXMuX2N1c3RvbUFuZ3VsYXJFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgncmVmJyk7XHJcblxyXG4gICAgICAgICAgY29uc3QgbmV3Q3VzdG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoY3VzdG9tQ29tcG9uZW50T3B0aW9ucy5zZWxlY3RvcikgYXMgRm9ybWlvQ3VzdG9tRWxlbWVudDtcclxuXHJcbiAgICAgICAgICBuZXdDdXN0b21FbGVtZW50LnNldEF0dHJpYnV0ZSgncmVmJywgJ2lucHV0Jyk7XHJcbiAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmlucHV0SW5mby5hdHRyKS5mb3JFYWNoKChhdHRyOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgbmV3Q3VzdG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgdGhpcy5pbnB1dEluZm8uYXR0clthdHRyXSk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICB0aGlzLl9jdXN0b21Bbmd1bGFyRWxlbWVudC5hcHBlbmRDaGlsZChuZXdDdXN0b21FbGVtZW50KTtcclxuICAgICAgICAgIHRoaXMuX2N1c3RvbUFuZ3VsYXJFbGVtZW50ID0gbmV3Q3VzdG9tRWxlbWVudDtcclxuXHJcbiAgICAgICAgICBzdXBlckF0dGFjaCA9IHN1cGVyLmF0dGFjaChlbGVtZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEJpbmQgY3VzdG9tT3B0aW9uc1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuY29tcG9uZW50LmN1c3RvbU9wdGlvbnMpIHtcclxuICAgICAgICAgIGlmICh0aGlzLmNvbXBvbmVudC5jdXN0b21PcHRpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgdGhpcy5fY3VzdG9tQW5ndWxhckVsZW1lbnRba2V5XSA9IHRoaXMuY29tcG9uZW50LmN1c3RvbU9wdGlvbnNba2V5XTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQmluZCB2YWxpZGF0ZSBvcHRpb25zXHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5jb21wb25lbnQudmFsaWRhdGUpIHtcclxuICAgICAgICAgIGlmICh0aGlzLmNvbXBvbmVudC52YWxpZGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2N1c3RvbUFuZ3VsYXJFbGVtZW50W2tleV0gPSB0aGlzLmNvbXBvbmVudC52YWxpZGF0ZVtrZXldO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBCaW5kIG9wdGlvbnMgZXhwbGljaXRseSBzZXRcclxuICAgICAgICBjb25zdCBmaWVsZE9wdGlvbnMgPSBjdXN0b21Db21wb25lbnRPcHRpb25zLmZpZWxkT3B0aW9ucztcclxuICAgICAgICBpZiAoaXNBcnJheShmaWVsZE9wdGlvbnMpICYmIGZpZWxkT3B0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBmaWVsZE9wdGlvbnMpIHtcclxuICAgICAgICAgICAgaWYgKGZpZWxkT3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5fY3VzdG9tQW5ndWxhckVsZW1lbnRbZmllbGRPcHRpb25zW2tleV1dID0gdGhpcy5jb21wb25lbnRbZmllbGRPcHRpb25zW2tleV1dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBdHRhY2ggZXZlbnQgbGlzdGVuZXIgZm9yIGVtaXQgZXZlbnRcclxuICAgICAgICB0aGlzLl9jdXN0b21Bbmd1bGFyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdmb3JtaW9FdmVudCcsIChldmVudDogQ3VzdG9tRXZlbnQ8Rm9ybWlvRXZlbnQ+KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoZXZlbnQuZGV0YWlsLmV2ZW50TmFtZSwge1xyXG4gICAgICAgICAgICAuLi5ldmVudC5kZXRhaWwuZGF0YSxcclxuICAgICAgICAgICAgY29tcG9uZW50OiB0aGlzLmNvbXBvbmVudFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEVuc3VyZSB3ZSBiaW5kIHRoZSB2YWx1ZSAoaWYgaXQgaXNuJ3QgYSBtdWx0aXBsZS12YWx1ZSBjb21wb25lbnQgd2l0aCBubyB3cmFwcGVyKVxyXG4gICAgICAgIGlmICghdGhpcy5fY3VzdG9tQW5ndWxhckVsZW1lbnQudmFsdWUgJiYgIXRoaXMuY29tcG9uZW50LmRpc2FibGVNdWx0aVZhbHVlV3JhcHBlcikge1xyXG4gICAgICAgICAgdGhpcy5yZXN0b3JlVmFsdWUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzdXBlckF0dGFjaDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgZXh0cmEgb3B0aW9uIHRvIHN1cHBvcnQgbXVsdGlwbGUgdmFsdWUgKGUuZy4gZGF0YWdyaWQpIHdpdGggc2luZ2xlIGFuZ3VsYXIgY29tcG9uZW50IChkaXNhYmxlTXVsdGlWYWx1ZVdyYXBwZXIpXHJcbiAgICB1c2VXcmFwcGVyKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb21wb25lbnQuaGFzT3duUHJvcGVydHkoJ211bHRpcGxlJykgJiYgdGhpcy5jb21wb25lbnQubXVsdGlwbGUgJiYgIXRoaXMuY29tcG9uZW50LmRpc2FibGVNdWx0aVZhbHVlV3JhcHBlcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZGVmYXVsdFZhbHVlKCkge1xyXG4gICAgICBsZXQgZGVmYXVsdFZhbHVlID0gdGhpcy5lbXB0eVZhbHVlO1xyXG5cclxuICAgICAgLy8gaGFuZGxlIGZhbHN5IGRlZmF1bHQgdmFsdWVcclxuICAgICAgaWYgKCFpc05pbCh0aGlzLmNvbXBvbmVudC5kZWZhdWx0VmFsdWUpKSB7XHJcbiAgICAgICAgZGVmYXVsdFZhbHVlID0gdGhpcy5jb21wb25lbnQuZGVmYXVsdFZhbHVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5jb21wb25lbnQuY3VzdG9tRGVmYXVsdFZhbHVlICYmICF0aGlzLm9wdGlvbnMucHJldmlldykge1xyXG4gICAgICAgIGRlZmF1bHRWYWx1ZSA9IHRoaXMuZXZhbHVhdGUoXHJcbiAgICAgICAgICB0aGlzLmNvbXBvbmVudC5jdXN0b21EZWZhdWx0VmFsdWUsXHJcbiAgICAgICAgICB7IHZhbHVlOiAnJyB9LFxyXG4gICAgICAgICAgJ3ZhbHVlJ1xyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBjbG9uZShkZWZhdWx0VmFsdWUpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuZXhwb3J0IHsgRm9ybWlvQ3VzdG9tQ29tcG9uZW50SW5mbyB9O1xyXG5cclxuIl19