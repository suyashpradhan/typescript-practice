type User={
    user:singleUser[]
}

type singleUser={
    name:string,
    age:number,
    designation:string,
    location:string,
    areaOfInterest:Interest[]
    previousJob:Job[]
}

type Interest = {
    areaOfInterest :string
}

type Job={
    year:number,
    designation:string
}


const Users:User ={
    user:[{
        name:"Jane Doe",
        age:24,
        designation:"UI DEVELOPER",
        location:"Mumbai",
        areaOfInterest:["reading","listening"],
        previousJob:[{
            year:2017,
            designation:"Web Developer"
        },{
            year:2020,
            designation:"UI Developer"
        }]
    },{
        name:"John Doe",
        age:22,
        designation:"Web Engineer",
        location:"San Francisco",
        areaOfInterest:["riding bike","cooking"],
        previousJob:[{
            year:2015,
            designation:"Web Engineer"
        },{
            year:2019,
            designation:"Principal Engineer"
        }]
    }]
}

export {Users}