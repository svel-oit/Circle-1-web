
export default class LogsService {

    //GetLogRecords
    async GetLogRecords(filter) {
        const url = window.location + "api/Logs/GetLogRecords";
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`LogsService GetLogRecords failed, HTTP status ${response.status}`);
        }
        const data = await response.json();

        return data;
    }

    //GetAppList
    async GetAppList() {
        const url = window.location + "api/Logs/GetAppList"
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`LogsService GetAppList failed, HTTP status ${response.status}`);
        }
        const data = await response.json();

        return data;
    }
}