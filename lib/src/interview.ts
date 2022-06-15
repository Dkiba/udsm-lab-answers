export function getProcessedData(
  yearOneData: any,
  yearTwoData: any,
  yearThreeData: any
) {
  // TODO:
  // 1. Remove data items that has reporting rate less than 50
  // 2. Combine relevant data (data of the same code) from each year inorder to compute average
  // 3. Compute average for the combined data to arrive to single value (average value)
  // 4. Return the averaged data as final output
  /***
   * [
      {
        value: 43,
        name: 'Number of members registered',
        code: 'MEMBER_REGISTERED',
      },
      {
        value: 17,
        name: 'Number of active members',
        code: 'ACTIVE_MEMBERS',
      },
    ]
   */

    // SOLUTION


    // Creating empty arrays for storing year data items which have reporting rate >=50
    let registeredData :any[] = [];
    let activeData : any[] = [];

    /*Obtaining data items for each year,removing data items that has reporting rate less than 50 
    and combining relevant data (data of the same code)*/
    yearOneData.forEach((element:any) => {
        if (parseInt(element.reportingRate) >= 50 && element.code == 'MEMBER_REGISTERED') {
            registeredData.push(element);
        }
        if (parseInt(element.reportingRate) >= 50 && element.code == 'ACTIVE_MEMBERS') {
            activeData.push(element);
        }
    });
    yearTwoData.forEach((element:any) => {
        if (parseInt(element.reportingRate) >= 50 && element.code == 'MEMBER_REGISTERED') {
            registeredData.push(element);
        }
        if (parseInt(element.reportingRate) >= 50 && element.code == 'ACTIVE_MEMBERS') {
            activeData.push(element);
        }
    });
    yearThreeData.forEach((element:any) => {
        if (parseInt(element.reportingRate) >= 50 && element.code == 'MEMBER_REGISTERED') {
            registeredData.push(element);
        }
        if (parseInt(element.reportingRate) >= 50 && element.code == 'ACTIVE_MEMBERS') {
            activeData.push(element);
        }
    });

    //Finding the total of the data items which have reporting rate >=50
    let totalRegistered = 0;
    let totalActive = 0;
    registeredData.forEach((element) => {
        totalRegistered += element.value;
    });
    activeData.forEach((element) => {
        totalActive += element.value;
    });

    //Computing the average of the combined data base on data items code
    let avgRegistered = totalRegistered / registeredData.length;
    let avgActive = totalActive / activeData.length;

    //Assigning and returning the output
    var output = [
        {
            value: avgRegistered,
            name: 'Number of members registered',
            code: 'MEMBER_REGISTERED',
        },
        {
            value: avgActive,
            name: 'Number of active members',
            code: 'ACTIVE_MEMBERS',
        },
    ];
    return output;

}
