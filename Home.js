import React,{useState} from "react";
import axios from "axios";
import * as jsonFilter from "./json_files/test_filter_options.json";
import * as jsonData from "./json_files/test_units_data.json";
export default function Home(){
    /*var json=axios.get("").then((res)=>{
        console.log(res.data);
      }).catch((err)=>{
        console.log(err);
      });*/ //For Server Side json api
    //   var jsonKeys=Object.keys(jsonFilter.default);
    //   var jsonArray=Object.values(jsonFilter.default);
    //   var ss;
    //   console.log(jsonFilter.default["bedroom"].length);
    //   let divv=document.createElement("div");
    //   for(let i in jsonKeys)
    //   {
    //      // ss=ss+<select>;
    //      var select=document.createElement("select");
    //       var option=document.createElement("option");
    //      option.value="Select "+jsonArray[i];
    //       select.appendChild(option);
    //       var len=jsonArray[i].length;
    //       for(var j=0;j<len;j++) 
    //       {
    //             var option=document.createElement("option");
    //             option.value=jsonArray[i][j];
    //              select.appendChild(option);
    //       }
    //       divv.appendChild(select);
    //   }
let objArray=Object.entries(jsonFilter.default);
const [list,setList]=useState();
// console.log(objArray,typeof(objArray),objArray.products);
// const array=[(objArray.products.map((key)=><select><option>Select {key}</option> 
// {objArray[key].map((value)=><option>{value}</option>)}</select>))];
//const mp=new Map(objArray);
//console.log(mp);
let array=[];
for(var i=0;i<objArray.length;i++)
{
let newarray=[];
for(var j=0;j<objArray[i][1].length;j++)    
{
newarray.push(<option>{objArray[i][1][j]}</option>);
}
array.push(<select name={objArray[i][0]}> <option>Select {objArray[i][0]}</option>
{ newarray.map((value)=><option >{value.props.children}</option>)}</select>);
}
let array2=[];
function doSomething()
{
    var select=document.getElementsByTagName("select");
    console.log(select);
    let priceRange;
    let floor;
    let bedroom;
    let grossm2;
let flag1=0,flag2=0,flag3=0,flag4=0;
objArray=Object.entries(jsonData.default);
for(var i=0;i<select.length;i++)
    {
        if(select[i].name=="prices")
        {
            priceRange=select[i].value.split("-");
            if(priceRange!="Select prices") flag1=1;
        }
        else if(select[i].name=="floor")
        {
            floor=select[i].value;
            if(floor!="Select floor") flag2=1;
        }
        else if(select[i].name=="bedroom")
        {
            bedroom=select[i].value.split(" ")[0];
            if(bedroom!="Select") flag3=1;
        }
        else if(select[i].name=="grossm2")
        {
            grossm2=select[i].value.split("-");
            if(grossm2!="Select grossm2") flag4=1;
        }
        
    }
    let failArray=[];
    console.log(objArray[0]);
    for(var i=0;i<objArray.length;i++)
    {
        if(flag1==1) if(objArray[i][1].price<priceRange[0] || objArray[i].price>priceRange[1]) {failArray.push(i);continue;};
        if(flag2==1) if(! objArray[i][1].floor.toString().startsWith(floor)) {failArray.push(i);continue;};
        if(flag3==1) if(! objArray[i][1].bedroom.startsWith(bedroom)) {failArray.push(i);continue;};
        if(flag4==1) if(objArray[i][1].grossm2<grossm2[0] || objArray[i].grossm2>grossm2[1]) {failArray.push(i);continue;};
    }
    console.log(failArray);
    for(var i=0;i<objArray.length;i++)
    {
        if(i in failArray) array2.push(objArray[i][1]);
    }
    console.log(array2);
}
        return (
            <div>
        <div>
            {
                array
            }
            <button onClick={()=>doSomething()}>Search</button>
        </div>
        <div>
            {
                array2.map(
                    function(obj){
                        return {obj.toString()}+<br></br>
                    }
                )
            }
        </div>
        </div>
    );
        }