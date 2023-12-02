import Card from "../Components/Card";

function Dashboard({cart}) {
    return(
        <div className={`bg-white min-h-screen text-3xl pt-20 font-semibold flex flex-col items-center ${cart.length==0?"justify-center":""}`}>
            <div>
            Welcome to Dashboard
            {(cart.length==0)&&
            <p className="text-sm text-center">Your Dashboard is empty</p>}
            </div>
            <div className="px-5 py-10 h-full flex gap-[50px] justify-center flex-wrap">
                {   
                    cart.map(data => {
                        return <Card key={data.id} data={data} cart={cart}></Card>;
                    })
                }
            </div>
        </div>
    );
}

export default Dashboard;