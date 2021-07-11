import React from 'react'

export const Home = () => {
    return (
        <div>
            <section className="container-fuild" id="Home">
                <div className="row">
                    <div className="col-8">
                        <h1>Build For Developer</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, sunt recusandae autem voluptatum quasi, 
                         mollitia voluptates voluptatibus doloribus impedit fugiat,
                         commodi accusamus quaerat ipsam maiores! Maiores nihil harum praesentium vero!</p>
                    </div>
                <div className="col-3">
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                </div>
            </section>
        </div>
    )
}
