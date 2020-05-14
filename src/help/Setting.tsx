import AsyncStorage from '@react-native-community/async-storage'

class Setting {
  baseURL: string = 'https://beta.mypaga.com/paga-webservices/customer-mobile/'
  apiDateFormat: string = "yyyy-MM-dd'T'HH:mm:ss.SSSSxxx"
  appDateTimeFormat: string = "dd/MM/yyyy hh:mm a"
  appSimpleDatdFormat: string = "dd/MM/yyyy"

  constructor() {
  }

  async isVerified(): Promise<boolean> {
    let isVerified = await this.getUserId()
    return isVerified !== null
  }

  async getUserId(): Promise<string | null> {
    try {
      const userId = await AsyncStorage.getItem('userId')
      return userId
    } catch (e) {
      return null
    }
  }


  async saveSingInInfo(userName?: string, email?: string, userId?: string, phoneNumber?: string) {
    try {
      if (userId !== null) {
        await AsyncStorage.setItem('userName', userName!)
      }
      
      if (userId !== null) {
        await AsyncStorage.setItem('email', email!)
      }
      
      if (userId !== null) {
        await AsyncStorage.setItem('userId', userId!)
      }
      if (phoneNumber !== null) {
        await AsyncStorage.setItem('phoneNumber', phoneNumber!)
      }
    } catch (e) {
    }
  }

  async clearCache() {
    try {
      await AsyncStorage.removeItem('userId')
      await AsyncStorage.removeItem('email')
      await AsyncStorage.removeItem('userName')
      await AsyncStorage.removeItem('phoneNumber')
    } catch (e) {
    }
  }

}

export const setting = new Setting()