import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class MaskPipe {
    transform(value, showSsnMask) {
        if (showSsnMask === true) {
            if (String(value).startsWith('*')) {
                return '';
            }
            else if (String(value).match('^d{9}$')) {
                return '***-**-' + String(value).substring(String(value).length - 4);
            }
            else {
                return '';
            }
        }
        else {
            const cleaned = ('' + value).replace(/\D/g, '');
            const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
            if (match) {
                return '(' + match[1] + ') ' + match[2] + '-' + match[3];
            }
            else if (String(value).startsWith('*')) {
                return '';
            }
            else if (String(value).match('^d{9}$')) {
                return (String(value).substring(0, 3) + '-' + String(value).substring(3, 5) + '-' + String(value).substring(5, 9));
            }
            else {
                return '';
            }
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaskPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: MaskPipe, name: "ssnMask" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaskPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'ssnMask' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3NuTWFzay5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvQGNvcmUvcGlwZS9zc25NYXNrLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBR3BELE1BQU0sT0FBTyxRQUFRO0lBQ25CLFNBQVMsQ0FBQyxLQUFhLEVBQUUsV0FBb0I7UUFDM0MsSUFBSSxXQUFXLEtBQUssSUFBSSxFQUFFO1lBQ3hCLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDakMsT0FBTyxFQUFFLENBQUM7YUFDWDtpQkFBTSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ3hDLE9BQU8sU0FBUyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQzthQUN0RTtpQkFBTTtnQkFDTCxPQUFPLEVBQUUsQ0FBQzthQUNYO1NBQ0Y7YUFBTTtZQUNMLE1BQU0sT0FBTyxHQUFHLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDaEQsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQ3ZELElBQUksS0FBSyxFQUFFO2dCQUNULE9BQU8sR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDMUQ7aUJBQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUN4QyxPQUFPLEVBQUUsQ0FBQzthQUNYO2lCQUFNLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDeEMsT0FBTyxDQUNMLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQzFHLENBQUM7YUFDSDtpQkFBTTtnQkFDTCxPQUFPLEVBQUUsQ0FBQzthQUNYO1NBQ0Y7SUFDSCxDQUFDO3dHQXpCVSxRQUFRO3NHQUFSLFFBQVE7OzRGQUFSLFFBQVE7a0JBRHBCLElBQUk7bUJBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnc3NuTWFzaycgfSlcclxuZXhwb3J0IGNsYXNzIE1hc2tQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcsIHNob3dTc25NYXNrOiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgIGlmIChzaG93U3NuTWFzayA9PT0gdHJ1ZSkge1xyXG4gICAgICBpZiAoU3RyaW5nKHZhbHVlKS5zdGFydHNXaXRoKCcqJykpIHtcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgIH0gZWxzZSBpZiAoU3RyaW5nKHZhbHVlKS5tYXRjaCgnXmR7OX0kJykpIHtcclxuICAgICAgICByZXR1cm4gJyoqKi0qKi0nICsgU3RyaW5nKHZhbHVlKS5zdWJzdHJpbmcoU3RyaW5nKHZhbHVlKS5sZW5ndGggLSA0KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGNsZWFuZWQgPSAoJycgKyB2YWx1ZSkucmVwbGFjZSgvXFxEL2csICcnKTtcclxuICAgICAgY29uc3QgbWF0Y2ggPSBjbGVhbmVkLm1hdGNoKC9eKFxcZHszfSkoXFxkezN9KShcXGR7NH0pJC8pO1xyXG4gICAgICBpZiAobWF0Y2gpIHtcclxuICAgICAgICByZXR1cm4gJygnICsgbWF0Y2hbMV0gKyAnKSAnICsgbWF0Y2hbMl0gKyAnLScgKyBtYXRjaFszXTtcclxuICAgICAgfSBlbHNlIGlmIChTdHJpbmcodmFsdWUpLnN0YXJ0c1dpdGgoJyonKSkge1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgICAgfSBlbHNlIGlmIChTdHJpbmcodmFsdWUpLm1hdGNoKCdeZHs5fSQnKSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICBTdHJpbmcodmFsdWUpLnN1YnN0cmluZygwLCAzKSArICctJyArIFN0cmluZyh2YWx1ZSkuc3Vic3RyaW5nKDMsIDUpICsgJy0nICsgU3RyaW5nKHZhbHVlKS5zdWJzdHJpbmcoNSwgOSlcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=