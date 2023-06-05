import {data, labels} from "../src/data/data";

class mockData {
    /** getMockUserInfo function
     *
     * retrieve data from a json
     *
     * @param {number} id
     * @returns info about the user like her/his name, age, score, macro count
    */
    static getData(id){
        
        let userInfoTab = data;
        
        userInfoTab = userInfoTab.find(user => user.id === id)

        return userInfoTab
    }

    /** getMockUserActivity function
     *
     * retrieve data from a json
     *
     * @param {number} id
     * @returns info about the user activity like daily sessions, kilogram and calories burned
    */
    static getLabels(){
        let userLabels = labels;

        return userLabels
    }

}

export default mockData

