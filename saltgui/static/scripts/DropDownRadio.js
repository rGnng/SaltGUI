/* global */

import {DropDownMenu} from "./DropDown.js";

export class DropDownMenuRadio extends DropDownMenu {
  constructor (pParentElement) {
    super(pParentElement);
    this._value = null;
    this._defaultValue = null;
  }

  getValue () {
    if (this._value === null) {
      return this._defaultValue;
    }
    return this._value;
  }

  setValue (pValue) {
    this._value = pValue;
  }

  setDefaultValue (pDefaultValue) {
    this._defaultValue = pDefaultValue;
  }

  static _menuItemLabelCallBack (pMenu, pMenuItem) {
    let title;
    if (!pMenuItem._title) {
      title = "...";
    } else if (typeof pMenuItem._title === "string") {
      title = pMenuItem._title;
    } else {
      title = pMenuItem._title(pMenuItem);
    }

    if (title === null) {
      // menu item will be hidden
    } else if (pMenuItem._value === pMenu._value) {
      // 25CF = BLACK CIRCLE
      title = "\u25CF&nbsp;" + title;
    } else if (pMenu._value === null && pMenuItem._value === pMenu._defaultValue) {
      // 25CB = WHITE CIRCLE
      title = "\u25CB&nbsp;" + title;
    }
    return title;
  }

  static _menuItemActionCallBack (pMenu, pEvent, pValue) {
    pMenu._value = pValue;
    const menuItem = pEvent.target;
    let menuTitle = menuItem._title;
    if (typeof menuTitle !== "string") {
      menuTitle = menuTitle(menuItem);
    }
    pMenu.setTitle(menuTitle);
  }

  addMenuItemRadio (pValue, pTitle) {
    const menuItem = super.addMenuItem(
      pValue,
      DropDownMenuRadio._menuItemLabelCallBack,
      DropDownMenuRadio._menuItemActionCallBack);

    menuItem._title = pTitle;
  }
}
