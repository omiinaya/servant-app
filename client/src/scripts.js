import { isMobile } from 'react-device-detect';

//gets current orientation of the device.
export function getOrientation() {
    if (window.matchMedia("(orientation: portrait)").matches) {
        return 'portrait'
    } else {
        return 'landscape'
    }
}

//gets current device type.
export function getDeviceType() {
    if (isMobile) {
        return 'mobile'
    } else {
        return 'other'
    }
}