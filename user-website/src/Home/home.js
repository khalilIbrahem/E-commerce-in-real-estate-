import React from "react";
class Home extends React.Component {
    render() {
        return (
        <section class="py-7 py-md-0 bg-hero" id="home">
            <div class="container">
                <div class="row vh-md-100">
                    <div class="col-md-8 col-sm-10 col-12 mx-auto my-auto text-center">
                        <h1 class="heading-black text-capitalize">Welcom to website user</h1>
                        <p class="lead py-3" style={{color:"#fff"}}>Lets get best over</p>
                        <button class="btn btn-primary d-inline-flex flex-row align-items-center" onClick={
                            ()=>{
                                window.location.href="/post"
                            }
                        }>
                            Show Posts now
                            <em class="ml-2" data-feather="arrow-right"></em>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}
export default Home;