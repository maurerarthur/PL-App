import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions'
import  Constants  from 'expo-constants'

export default LocalNotification = async (notificationTitle, notificationBody) => {
    let notification = {
        title: notificationTitle,
        body: notificationBody,
        priority: 'max',
        vibrate: true
    }

    const scheduleNotification = {
        time: (new Date()).getTime() + 250
    }

    getPermissions = async () => {
        let result = await Permissions.askAsync(Permissions.NOTIFICATIONS)

        if(Constants.isDevice && result.status === "granted") {
            return true
        }
    }

    if(getPermissions()) {
        await Notifications.scheduleLocalNotificationAsync(notification, scheduleNotification)
    }
}