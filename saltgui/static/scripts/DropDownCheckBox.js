/* global */

import {Character} from "./Character.js";
import {DropDownMenu} from "./DropDown.js";

export class DropDownMenuCheckBox extends DropDownMenu {
  // constructor (pParentElement) {
  //   super(pParentElement);
  // }

  addMenuItemCheckBox (pValue, pTitle, pCallBack) {
    const menuItem = super.addMenuItem(pValue, pTitle, () => {
      menuItem._selected = !menuItem._selected;

      if (menuItem._selected === true) {
        menuItem.innerText = Character.HEAVY_CHECK_MARK + " " + pTitle;
      } else {
        menuItem.innerText = pTitle;
      }

      if (pCallBack) {
        pCallBack();
      }
    });
  }

  isSet (pValue) {
    for (const menuItem of this.menuDropdownContent.childNodes) {
      if (menuItem._selected === true && menuItem._value === pValue) {
        return true;
      }
    }
    return false;
  }
}
