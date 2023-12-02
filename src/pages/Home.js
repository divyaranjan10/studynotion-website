import Card from "../Components/Card";
import { filterData, apiUrl } from "../Data";
import { useState, useEffect } from "react";
import FilterTab from "../Components/FilterTab";
import Shimer from "../Components/MyShimer.js";

function Home({isLogin, notification, setNotification,setCart,cart}) {
    const [fetchedData, setfetchedData] = useState([]);
    const [loading, setloading] = useState(true);
    const [filterDatavar, setfilterDatavar] = useState("All");

    async function fetchData() {
        setloading(true);
        try {
            const response = await fetch(apiUrl);
            const output = await response.json();
            setfetchedData(output.data);
        }

        catch (e) {
            console.log("Data unable to fetch");
        }

        setloading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);



    let courses = fetchedData;
    function getCourses() {
        let allCourse = [];

        if (filterDatavar == "All") {
            Object.values(courses).forEach(array => {
                array.forEach(courseData => {
                    allCourse.push(courseData);
                })
            })
            return allCourse;
        }
        else {
            return courses[filterDatavar];
        }
    }
    getCourses();
    return (
        <div className="relative bg-white text-3xl min-h-full pt-20">
            <div className="flex justify-center gap-3 flex-wrap">
                {
                    filterData.map((data) => {
                        return <FilterTab setfilterDatavar={setfilterDatavar} filterDatavar={filterDatavar} key={data.id} data={data} />
                    })
                }
            </div>


            <div className="px-5 py-10 min-h-[85vh] flex gap-[50px] justify-center items-center flex-wrap">
                {   loading?<Shimer></Shimer>:
                    getCourses().map(data => {
                        return <Card notification={notification} setNotification={setNotification} key={data.id} data={data} isLogin={isLogin} setCart={setCart} cart={cart}></Card>;
                    })
                }
            </div>
        </div>
    );
}

export default Home;