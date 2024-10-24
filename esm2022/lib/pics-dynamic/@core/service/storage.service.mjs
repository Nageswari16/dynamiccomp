export class StorageService {
    Storage;
    constructor(Storage) {
        this.Storage = Storage;
    }
    getItem(key) {
        return this.Storage.getItem(key);
    }
    setItem(key, item) {
        return this.Storage.setItem(key, item);
    }
    getObj(key, safe = true) {
        try {
            const item = this.getItem(key);
            return JSON.parse(item);
        }
        catch (e) {
            if (!safe) {
                throw e;
            }
        }
    }
    setObj(key, item) {
        return this.setItem(key, JSON.stringify(item));
    }
    removeItem(key) {
        this.Storage.removeItem(key);
    }
    clear() {
        this.Storage.clear();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvQGNvcmUvc2VydmljZS9zdG9yYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxPQUFPLGNBQWM7SUFDSDtJQUF0QixZQUFzQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztJQUFHLENBQUM7SUFFL0IsT0FBTyxDQUFDLEdBQVc7UUFDeEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRU0sT0FBTyxDQUFDLEdBQVcsRUFBRSxJQUFTO1FBQ25DLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTSxNQUFNLENBQUMsR0FBVyxFQUFFLElBQUksR0FBRyxJQUFJO1FBQ3BDLElBQUk7WUFDRixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQy9CLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6QjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDVCxNQUFNLENBQUMsQ0FBQzthQUNUO1NBQ0Y7SUFDSCxDQUFDO0lBRU0sTUFBTSxDQUFDLEdBQVcsRUFBRSxJQUFTO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFTSxVQUFVLENBQUMsR0FBVztRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRU0sS0FBSztRQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdkIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFN0b3JhZ2VTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgU3RvcmFnZTogYW55KSB7fVxyXG5cclxuICBwdWJsaWMgZ2V0SXRlbShrZXk6IHN0cmluZyk6IGFueSB7XHJcbiAgICByZXR1cm4gdGhpcy5TdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRJdGVtKGtleTogc3RyaW5nLCBpdGVtOiBhbnkpOiB2b2lkIHtcclxuICAgIHJldHVybiB0aGlzLlN0b3JhZ2Uuc2V0SXRlbShrZXksIGl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldE9iaihrZXk6IHN0cmluZywgc2FmZSA9IHRydWUpOiBhbnkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaXRlbSA9IHRoaXMuZ2V0SXRlbShrZXkpO1xyXG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShpdGVtKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgaWYgKCFzYWZlKSB7XHJcbiAgICAgICAgdGhyb3cgZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldE9iaihrZXk6IHN0cmluZywgaXRlbTogYW55KTogdm9pZCB7XHJcbiAgICByZXR1cm4gdGhpcy5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xlYXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLlN0b3JhZ2UuY2xlYXIoKTtcclxuICB9XHJcbn1cclxuIl19