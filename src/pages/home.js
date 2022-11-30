import React from "react";

class Home extends React.Component {
    render() {
        return (
            <div>

                <section>
                    <div>
                        <div>
                            <h1>Hello,</h1>
                            <h1>My name is Clarence</h1>
                            <a href="home">Portfolio</a>
                        </div>
                    </div>
                </section>

                {/* <!--project/work--> */}
                <section id="project">
                    <div class="info">
                        <div class="work">
                            <h1 class="title">Work Sample</h1>
                        </div>
                        <div class="box">
                            <div class="box1">
                                <h1>Horiseon Social Management</h1>
                                <a href="https://github.com/dalebungay/Homework-1/blob/main/index.html"><img
                                    src="/assets/images/github.png" alt="" /></a>
                                <a href="https://dalebungay.github.io/Homework-1/"><img src="/assets/images/html.png" alt="" /></a>
                            </div>
                            <div class="box1">
                            <h1>UCB Project1</h1>
                                <a href="https://luan-pham.github.io/Marvel-Project/">
                                    <img src="/assets/images/github.png" alt="" /></a>
                                <a href="https://github.com/dalebungay/Marvel_api-project-1-/tree/main/Marvel-Project"><img src="/assets/images/html.png" alt="" /></a>
                            </div>
                            <div class="box1">
                                <h1>UCB Project2</h1>
                                <a href="https://arcane-waters-66340.herokuapp.com/"><img
                                    src="/assets/images/github.png" alt="" /></a>
                                <a href="https://github.com/dalebungay/ClotheryClub"><img src="
                                        /assets/images/html.png" alt="" /></a>
                            </div>
                            <div class="box1">
                                <h1>UCB Project2</h1>
                                <a href="https://star-chart7.herokuapp.com//"><img
                                    src="/assets/images/github.png" alt="" /></a>
                                <a href="https://github.com/TottoMoe/star-chart"><img src="
                                        /assets/images/html.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="about">
                    <div id="pic">
                        <img src="/assets/images/img2.jpg" alt="" />
                        <div class="intro">
                            <h1 id="par">ABOUT ME</h1>
                            <p>Hi! My name is Clarence Dale Bungay</p>
                            <p>I was born on August 20, 1996 in the Philippines and lived there until I was 21 years old</p>
                            <p>I was half way through college, I was taking computer science,</p>
                            <p>when I migrated to California.</p>
                            <p>I am now working currently working as a shift supervisor in a fastfood restaurant</p>
                        </div>
                    </div>
                </section>

                {/* <!--contact--> */}
                <section id="contact">
                    <div class="content">
                        <div>
                            <h1 class="content-title">CONTACT INFO</h1>
                        </div>
                        <div class="items">
                            <div class="contact-item">
                                <div class="icon"><img src="/assets/images/phone.png" alt="" /></div>
                                <div class="contact-info">
                                    <h1>Phone</h1>
                                    <h2>707-319-9396</h2>
                                </div>
                            </div>
                            <div class="contact-item">
                                <div class="icon"><img src="/assets/images/mail.png" alt="" /></div>
                                <div class="contact-info">
                                    <h1>Email</h1>
                                    <h2>dalebungay@gmail.com</h2>
                                </div>
                            </div>
                            <div class="contact-item">
                                <div class="icon"><img src="/assets/images/address.png" alt="" /></div>
                                <div class="contact-info">
                                    <h1>Address</h1>
                                    <h2>2035 Beryl Ct. Vallejo California</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact2">
                    <form>
                        <div>
                        <label>
                            Name:
                            <input type="text" name="name" />
                        </label>
                        </div>
                        <div>
                        <label>
                            Name:
                            <input type="text" name="name" />
                        </label>
                        </div>
                        <div>
                        <label>
                            Name:
                            <input type="text" name="name" />
                        </label>
                        </div>
                        <div>
                        <input type="submit" value="Submit"/>
                        </div>
                    </form>
                </section>

            </div>
        );
    }
}

export default Home;
