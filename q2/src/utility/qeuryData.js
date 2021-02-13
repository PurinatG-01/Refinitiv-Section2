
export default function queryData(keyword, data){
    let result = []
    data.forEach((e)=>{
        if(e.includes(keyword))
            result.push(e)
    })

    return result
}
