"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n  <StackLayout>\n    <TextField hint=\"Email Address\" keyboardType=\"email\"\n      autocorrect=\"false\" autocapitalizationType=\"none\"></TextField>\n    <TextField hint=\"Password\" secure=\"true\"></TextField>\n    <MDL:MaterialDropdownList col=\"1\" id=\"ddlColors\"\n      itemsSeparatorColor=\"transparent\" itemsRowHeight=\"30\"\n      items=\"{{ colors }}\" selectedIndex=\"{{ selectedColorIndex }}\" >\n    </MDL:MaterialDropdownList>\n    <Button text=\"Sign in\"></Button>\n    <Button text=\"Sign up for Groceries\"></Button>\n  </StackLayout>\n  "
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFrQjFDO0lBQUE7SUFFQSxDQUFDO0lBRlksWUFBWTtRQWhCeEIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxxakJBWVQ7U0FDRixDQUFDO09BQ1csWUFBWSxDQUV4QjtJQUFELG1CQUFDO0NBQUEsQUFGRCxJQUVDO0FBRlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHRlbXBsYXRlOiBgXG4gIDxTdGFja0xheW91dD5cbiAgICA8VGV4dEZpZWxkIGhpbnQ9XCJFbWFpbCBBZGRyZXNzXCIga2V5Ym9hcmRUeXBlPVwiZW1haWxcIlxuICAgICAgYXV0b2NvcnJlY3Q9XCJmYWxzZVwiIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XCJub25lXCI+PC9UZXh0RmllbGQ+XG4gICAgPFRleHRGaWVsZCBoaW50PVwiUGFzc3dvcmRcIiBzZWN1cmU9XCJ0cnVlXCI+PC9UZXh0RmllbGQ+XG4gICAgPE1ETDpNYXRlcmlhbERyb3Bkb3duTGlzdCBjb2w9XCIxXCIgaWQ9XCJkZGxDb2xvcnNcIlxuICAgICAgaXRlbXNTZXBhcmF0b3JDb2xvcj1cInRyYW5zcGFyZW50XCIgaXRlbXNSb3dIZWlnaHQ9XCIzMFwiXG4gICAgICBpdGVtcz1cInt7IGNvbG9ycyB9fVwiIHNlbGVjdGVkSW5kZXg9XCJ7eyBzZWxlY3RlZENvbG9ySW5kZXggfX1cIiA+XG4gICAgPC9NREw6TWF0ZXJpYWxEcm9wZG93bkxpc3Q+XG4gICAgPEJ1dHRvbiB0ZXh0PVwiU2lnbiBpblwiPjwvQnV0dG9uPlxuICAgIDxCdXR0b24gdGV4dD1cIlNpZ24gdXAgZm9yIEdyb2Nlcmllc1wiPjwvQnV0dG9uPlxuICA8L1N0YWNrTGF5b3V0PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIC8vIFlvdXIgVHlwZVNjcmlwdCBsb2dpYyBnb2VzIGhlcmVcbn1cbiJdfQ==