/* global */

import {DropDownMenu} from "./DropDown.js";

export class DropDownMenuCmd extends DropDownMenu {
  // constructor (pParentElement) {
  //   super(pParentElement);
  // }

  addMenuItemCmd (pTitle, pCallBack) {
    return super.addMenuItem(
      null,
      pTitle,
      pCallBack
    );
  }
}
