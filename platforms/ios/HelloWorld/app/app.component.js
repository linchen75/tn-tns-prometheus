"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        // Your TypeScript logic goes here
        this.colors = ['red', 'yellow', 'blue'];
        this.selectedColorIndex = 0;
        this.accountDid = '';
        this.template = '';
        this.tseName = '';
        this.talentNetworkUrl = '';
        this.fromName = '';
        this.fromEmail = '';
    }
    AppComponent.prototype.submit = function () {
        if (this.accountDid === '') {
            return false;
        }
        console.log(this.accountDid);
        this.template = "Academy – Matrix";
        this.tseName = 'Beijing Zzxl Technology, Co. LTD - 1k Plan_TN8911';
        this.talentNetworkUrl = 'http://www.jobs.net/jobs/beijing-zzxl-technology-co-ltd-1k-plan-8911';
        this.fromName = 'Beijing Zzxl Technology, Co. LTD - 1k Plan';
        this.fromEmail = 'BeijingZzxlTechnologyCoLTD1kPlan_TN8911@jobs.net';
    };
    AppComponent.prototype.readFile = function (input) {
        if (input.files && input.files[0]) {
            var tempFile = input.files[0];
            //       if (!this.uploadFileValidation(tempFile)) {
            //         return false;
            //       }
            var reader = void 0;
            reader = new FileReader();
            reader.onload = function (e) {
                var img = new Image;
                img.onload = function () {
                    if (img.width < 400 && img.height < 400) {
                        alert('The image resolution is too low.');
                        return false;
                    }
                    //           this.generateMediaItem(img, tempFile);
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(input.files[0]);
        }
    };
    AppComponent.prototype.uploadFile = function (e) {
        this.readFile(this.upload.nativeElement);
        console.log("1111" + this.upload.nativeElement);
    };
    __decorate([
        core_1.ViewChild('upload'),
        __metadata("design:type", core_1.ElementRef)
    ], AppComponent.prototype, "upload", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n  <ScrollView orientation=\"horizontal\" ios.pagingEnabled=\"true\" left=\"0\" top=\"0\" width=\"100%\" height=\"100%\">\n  <StackLayout>\n    <TextView text=\"Steps 1: Key Information\"></TextView>\n    <FlexboxLayout>  \n      <Label text=\"Account DID\"></Label><Label class=\"must\" text=\"*\"></Label>\n    </FlexboxLayout>\n    <FlexboxLayout class=\"fullWidth\">\n      <TextField id=\"accountDid\" class=\"textbox\" [(ngModel)]=\"accountDid\"></TextField> \n      <Button text=\"Look up\" class=\"btn btn-primary btn-active\" (tap)=\"submit()\"></Button>\n    </FlexboxLayout>\n\n    <FlexboxLayout>  \n      <Label text=\"Template\"></Label><Label class=\"must\" text=\"*\"></Label>\n    </FlexboxLayout>\n    <TextField id=\"template\" text=\"{{ template }}\"></TextField>\n    \n\n    <FlexboxLayout>  \n      <Label text=\"TSE Name\"></Label><Label class=\"must\" text=\"*\"></Label>\n    </FlexboxLayout>\n    <TextField id=\"tseName\" text=\"{{ tseName }}\"></TextField>\n\n    <FlexboxLayout>  \n      <Label text=\"TalentNetwork URL\"></Label><Label class=\"must\" text=\"*\"></Label>\n    </FlexboxLayout>\n    <TextField id=\"talentNetworkUrl\" text=\"{{ talentNetworkUrl }}\"></TextField>\n\n    <FlexboxLayout>  \n      <Label text=\"Default Language\"></Label><Label class=\"must\" text=\"*\"></Label>\n    </FlexboxLayout>\n    <TextField></TextField>\n\n    <TextView text=\"Step 2: Configuration Options\"></TextView>\n    <TextView text=\"Emails:\"></TextView>\n    <FlexboxLayout>  \n      <Label text=\"From Name\"></Label><Label class=\"must\" text=\"*\"></Label>\n    </FlexboxLayout>\n    <TextField id=\"fromName\" text=\"{{ fromName }}\"></TextField>\n\n    <FlexboxLayout>  \n      <Label text=\"From Email\"></Label><Label class=\"must\" text=\"*\"></Label>\n    </FlexboxLayout>\n    <TextField id=\"fromEmail\" text=\"{{ fromEmail }}\"></TextField>\n\n  </StackLayout>\n  </ScrollView>\n  "
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUU7QUFxRGpFO0lBbkRBO1FBb0RFLGtDQUFrQztRQUNsQyxXQUFNLEdBQUcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ25DLHVCQUFrQixHQUFHLENBQUMsQ0FBQztRQUVoQixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxjQUFTLEdBQUcsRUFBRSxDQUFDO0lBd0N4QixDQUFDO0lBdkNDLDZCQUFNLEdBQU47UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDM0IsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLENBQUM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLGtCQUFrQixDQUFDO1FBQ25DLElBQUksQ0FBQyxPQUFPLEdBQUcsbURBQW1ELENBQUE7UUFDbEUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLHNFQUFzRSxDQUFBO1FBQzlGLElBQUksQ0FBQyxRQUFRLEdBQUcsNENBQTRDLENBQUE7UUFDNUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxrREFBa0QsQ0FBQTtJQUNyRSxDQUFDO0lBRU0sK0JBQVEsR0FBZixVQUFnQixLQUFLO1FBQ2YsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQyxJQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLG9EQUFvRDtZQUNwRCx3QkFBd0I7WUFDeEIsVUFBVTtZQUNKLElBQUksTUFBTSxTQUFLLENBQUM7WUFDaEIsTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7WUFDMUIsTUFBTSxDQUFDLE1BQU0sR0FBRyxVQUFDLENBQUM7Z0JBQ2hCLElBQU0sR0FBRyxHQUFHLElBQUksS0FBSyxDQUFDO2dCQUN0QixHQUFHLENBQUMsTUFBTSxHQUFHO29CQUNYLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDeEMsS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7d0JBQzFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQ2YsQ0FBQztvQkFDWCxtREFBbUQ7Z0JBQzNDLENBQUMsQ0FBQztnQkFDRixHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQzVCLENBQUMsQ0FBQztZQUNGLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7SUFDSCxDQUFDO0lBRU0saUNBQVUsR0FBakIsVUFBa0IsQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBN0NnQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBUyxpQkFBVTtnREFBQztJQUo3QixZQUFZO1FBbkR4QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLHk0REErQ1Q7U0FDRixDQUFDO09BQ1csWUFBWSxDQWtEeEI7SUFBRCxtQkFBQztDQUFBLEFBbERELElBa0RDO0FBbERZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHRlbXBsYXRlOiBgXG4gIDxTY3JvbGxWaWV3IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIGlvcy5wYWdpbmdFbmFibGVkPVwidHJ1ZVwiIGxlZnQ9XCIwXCIgdG9wPVwiMFwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIj5cbiAgPFN0YWNrTGF5b3V0PlxuICAgIDxUZXh0VmlldyB0ZXh0PVwiU3RlcHMgMTogS2V5IEluZm9ybWF0aW9uXCI+PC9UZXh0Vmlldz5cbiAgICA8RmxleGJveExheW91dD4gIFxuICAgICAgPExhYmVsIHRleHQ9XCJBY2NvdW50IERJRFwiPjwvTGFiZWw+PExhYmVsIGNsYXNzPVwibXVzdFwiIHRleHQ9XCIqXCI+PC9MYWJlbD5cbiAgICA8L0ZsZXhib3hMYXlvdXQ+XG4gICAgPEZsZXhib3hMYXlvdXQgY2xhc3M9XCJmdWxsV2lkdGhcIj5cbiAgICAgIDxUZXh0RmllbGQgaWQ9XCJhY2NvdW50RGlkXCIgY2xhc3M9XCJ0ZXh0Ym94XCIgWyhuZ01vZGVsKV09XCJhY2NvdW50RGlkXCI+PC9UZXh0RmllbGQ+IFxuICAgICAgPEJ1dHRvbiB0ZXh0PVwiTG9vayB1cFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1hY3RpdmVcIiAodGFwKT1cInN1Ym1pdCgpXCI+PC9CdXR0b24+XG4gICAgPC9GbGV4Ym94TGF5b3V0PlxuXG4gICAgPEZsZXhib3hMYXlvdXQ+ICBcbiAgICAgIDxMYWJlbCB0ZXh0PVwiVGVtcGxhdGVcIj48L0xhYmVsPjxMYWJlbCBjbGFzcz1cIm11c3RcIiB0ZXh0PVwiKlwiPjwvTGFiZWw+XG4gICAgPC9GbGV4Ym94TGF5b3V0PlxuICAgIDxUZXh0RmllbGQgaWQ9XCJ0ZW1wbGF0ZVwiIHRleHQ9XCJ7eyB0ZW1wbGF0ZSB9fVwiPjwvVGV4dEZpZWxkPlxuICAgIFxuXG4gICAgPEZsZXhib3hMYXlvdXQ+ICBcbiAgICAgIDxMYWJlbCB0ZXh0PVwiVFNFIE5hbWVcIj48L0xhYmVsPjxMYWJlbCBjbGFzcz1cIm11c3RcIiB0ZXh0PVwiKlwiPjwvTGFiZWw+XG4gICAgPC9GbGV4Ym94TGF5b3V0PlxuICAgIDxUZXh0RmllbGQgaWQ9XCJ0c2VOYW1lXCIgdGV4dD1cInt7IHRzZU5hbWUgfX1cIj48L1RleHRGaWVsZD5cblxuICAgIDxGbGV4Ym94TGF5b3V0PiAgXG4gICAgICA8TGFiZWwgdGV4dD1cIlRhbGVudE5ldHdvcmsgVVJMXCI+PC9MYWJlbD48TGFiZWwgY2xhc3M9XCJtdXN0XCIgdGV4dD1cIipcIj48L0xhYmVsPlxuICAgIDwvRmxleGJveExheW91dD5cbiAgICA8VGV4dEZpZWxkIGlkPVwidGFsZW50TmV0d29ya1VybFwiIHRleHQ9XCJ7eyB0YWxlbnROZXR3b3JrVXJsIH19XCI+PC9UZXh0RmllbGQ+XG5cbiAgICA8RmxleGJveExheW91dD4gIFxuICAgICAgPExhYmVsIHRleHQ9XCJEZWZhdWx0IExhbmd1YWdlXCI+PC9MYWJlbD48TGFiZWwgY2xhc3M9XCJtdXN0XCIgdGV4dD1cIipcIj48L0xhYmVsPlxuICAgIDwvRmxleGJveExheW91dD5cbiAgICA8VGV4dEZpZWxkPjwvVGV4dEZpZWxkPlxuXG4gICAgPFRleHRWaWV3IHRleHQ9XCJTdGVwIDI6IENvbmZpZ3VyYXRpb24gT3B0aW9uc1wiPjwvVGV4dFZpZXc+XG4gICAgPFRleHRWaWV3IHRleHQ9XCJFbWFpbHM6XCI+PC9UZXh0Vmlldz5cbiAgICA8RmxleGJveExheW91dD4gIFxuICAgICAgPExhYmVsIHRleHQ9XCJGcm9tIE5hbWVcIj48L0xhYmVsPjxMYWJlbCBjbGFzcz1cIm11c3RcIiB0ZXh0PVwiKlwiPjwvTGFiZWw+XG4gICAgPC9GbGV4Ym94TGF5b3V0PlxuICAgIDxUZXh0RmllbGQgaWQ9XCJmcm9tTmFtZVwiIHRleHQ9XCJ7eyBmcm9tTmFtZSB9fVwiPjwvVGV4dEZpZWxkPlxuXG4gICAgPEZsZXhib3hMYXlvdXQ+ICBcbiAgICAgIDxMYWJlbCB0ZXh0PVwiRnJvbSBFbWFpbFwiPjwvTGFiZWw+PExhYmVsIGNsYXNzPVwibXVzdFwiIHRleHQ9XCIqXCI+PC9MYWJlbD5cbiAgICA8L0ZsZXhib3hMYXlvdXQ+XG4gICAgPFRleHRGaWVsZCBpZD1cImZyb21FbWFpbFwiIHRleHQ9XCJ7eyBmcm9tRW1haWwgfX1cIj48L1RleHRGaWVsZD5cblxuICA8L1N0YWNrTGF5b3V0PlxuICA8L1Njcm9sbFZpZXc+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgLy8gWW91ciBUeXBlU2NyaXB0IGxvZ2ljIGdvZXMgaGVyZVxuICBjb2xvcnMgPSBbJ3JlZCcsICd5ZWxsb3cnLCAnYmx1ZSddO1xuICBzZWxlY3RlZENvbG9ySW5kZXggPSAwO1xuICBAVmlld0NoaWxkKCd1cGxvYWQnKSB1cGxvYWQ6IEVsZW1lbnRSZWY7XG4gIHB1YmxpYyBhY2NvdW50RGlkID0gJyc7XG4gIHB1YmxpYyB0ZW1wbGF0ZSA9ICcnO1xuICBwdWJsaWMgdHNlTmFtZSA9ICcnO1xuICBwdWJsaWMgdGFsZW50TmV0d29ya1VybCA9ICcnO1xuICBwdWJsaWMgZnJvbU5hbWUgPSAnJztcbiAgcHVibGljIGZyb21FbWFpbCA9ICcnO1xuICBzdWJtaXQoKSB7XG4gICAgaWYgKHRoaXMuYWNjb3VudERpZCA9PT0gJycpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc29sZS5sb2codGhpcy5hY2NvdW50RGlkKTtcbiAgICB0aGlzLnRlbXBsYXRlID0gXCJBY2FkZW15IOKAkyBNYXRyaXhcIjtcbiAgICB0aGlzLnRzZU5hbWUgPSAnQmVpamluZyBaenhsIFRlY2hub2xvZ3ksIENvLiBMVEQgLSAxayBQbGFuX1ROODkxMSdcbiAgICB0aGlzLnRhbGVudE5ldHdvcmtVcmwgPSAnaHR0cDovL3d3dy5qb2JzLm5ldC9qb2JzL2JlaWppbmctenp4bC10ZWNobm9sb2d5LWNvLWx0ZC0xay1wbGFuLTg5MTEnXG4gICAgdGhpcy5mcm9tTmFtZSA9ICdCZWlqaW5nIFp6eGwgVGVjaG5vbG9neSwgQ28uIExURCAtIDFrIFBsYW4nXG4gICAgdGhpcy5mcm9tRW1haWwgPSAnQmVpamluZ1p6eGxUZWNobm9sb2d5Q29MVEQxa1BsYW5fVE44OTExQGpvYnMubmV0J1xuICB9XG5cbiAgcHVibGljIHJlYWRGaWxlKGlucHV0KSB7XG4gICAg4oCC4oCC4oCC4oCCaWYgKGlucHV0LmZpbGVzICYmIGlucHV0LmZpbGVzWzBdKSB7XG4gICAg4oCC4oCC4oCC4oCC4oCC4oCCY29uc3QgdGVtcEZpbGUgPSBpbnB1dC5maWxlc1swXTtcbiAgICAvLyDigILigILigILigILigILigIJpZiAoIXRoaXMudXBsb2FkRmlsZVZhbGlkYXRpb24odGVtcEZpbGUpKSB7XG4gICAgLy8g4oCC4oCC4oCC4oCC4oCC4oCC4oCC4oCCcmV0dXJuIGZhbHNlO1xuICAgIC8vIOKAguKAguKAguKAguKAguKAgn1cbiAgICDigILigILigILigILigILigIJsZXQgcmVhZGVyOiBhbnk7XG4gICAg4oCC4oCC4oCC4oCC4oCC4oCCcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICDigILigILigILigILigILigIJyZWFkZXIub25sb2FkID0gKGUpID0+IHtcbiAgICDigILigILigILigILigILigILigILigIJjb25zdCBpbWcgPSBuZXcgSW1hZ2U7XG4gICAg4oCC4oCC4oCC4oCC4oCC4oCC4oCC4oCCaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICDigILigILigILigILigILigILigILigILigILigIJpZiAoaW1nLndpZHRoIDwgNDAwICYmIGltZy5oZWlnaHQgPCA0MDApIHtcbiAgICDigILigILigILigILigILigILigILigILigILigILigILigIJhbGVydCgnVGhlIGltYWdlIHJlc29sdXRpb24gaXMgdG9vIGxvdy4nKTtcbiAgICDigILigILigILigILigILigILigILigILigILigILigILigIJyZXR1cm4gZmFsc2U7XG4gICAg4oCC4oCC4oCC4oCC4oCC4oCC4oCC4oCC4oCC4oCCfVxuICAgIC8vIOKAguKAguKAguKAguKAguKAguKAguKAguKAguKAgnRoaXMuZ2VuZXJhdGVNZWRpYUl0ZW0oaW1nLCB0ZW1wRmlsZSk7XG4gICAg4oCC4oCC4oCC4oCC4oCC4oCC4oCC4oCCfTtcbiAgICDigILigILigILigILigILigILigILigIJpbWcuc3JjID0gZS50YXJnZXQucmVzdWx0O1xuICAgIOKAguKAguKAguKAguKAguKAgn07XG4gICAg4oCC4oCC4oCC4oCC4oCC4oCCcmVhZGVyLnJlYWRBc0RhdGFVUkwoaW5wdXQuZmlsZXNbMF0pO1xuICAgIOKAguKAguKAguKAgn1cbiAgICDigILigIJ9XG4gICAgXG4gICAg4oCC4oCCcHVibGljIHVwbG9hZEZpbGUoZSkge1xuICAgIOKAguKAguKAguKAgnRoaXMucmVhZEZpbGUodGhpcy51cGxvYWQubmF0aXZlRWxlbWVudCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiMTExMVwiICsgdGhpcy51cGxvYWQubmF0aXZlRWxlbWVudCk7XG4gICAg4oCC4oCCfVxufVxuIl19