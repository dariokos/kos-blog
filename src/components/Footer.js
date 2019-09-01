import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer>

                <div className="container-fluid bg-secondary py-3">
                    <div className="container">
                        <div className="row py-3">
                            <div className="col-md-9">
                                <p className="text-white">Created by Dario Kos</p>
                            </div>
                            <div className="col-md-3">
                                <div className="row">
                                    <div className="col"></div>
                                    <div className="col">
                                        <div className="bg-circle-outline d-inline-block">
                                            <a href="" className="text-white">
                                                <i className="fa fa-2x fa-fw fa-facebook"></i>
                                            </a>
                                        </div>

                                    </div>
                                    <div className="col">

                                        <div className="bg-circle-outline d-inline-block">
                                            <a href="" className="text-white">
                                                <i className="fa fa-2x fa-fw fa-twitter"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col">

                                        <div className="bg-circle-outline d-inline-block">
                                            <a href="" className="text-white">
                                                <i className="fa fa-2x fa-fw fa-linkedin"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col"></div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
