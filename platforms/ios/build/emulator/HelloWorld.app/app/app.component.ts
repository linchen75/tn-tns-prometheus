import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
  <StackLayout>
    <TextField hint="Email Address" keyboardType="email"
      autocorrect="false" autocapitalizationType="none"></TextField>
    <TextField hint="Password" secure="true"></TextField>
    <MDL:MaterialDropdownList col="1" id="ddlColors"
      itemsSeparatorColor="transparent" itemsRowHeight="30"
      items="{{ colors }}" selectedIndex="{{ selectedColorIndex }}" >
    </MDL:MaterialDropdownList>
    <Button text="Sign in"></Button>
    <Button text="Sign up for Groceries"></Button>
  </StackLayout>
  `
})
export class AppComponent {
  // Your TypeScript logic goes here
}
