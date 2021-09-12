import { isMobile } from 'react-device-detect';

//gets current orientation of the device.
export function getOrientation() {
    if (window.matchMedia("(orientation: portrait)").matches) {
        return true
    } else {
        return false
    }
}

export function getDeviceType() {
    return isMobile
}