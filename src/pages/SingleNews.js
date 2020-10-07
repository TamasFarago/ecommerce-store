import React, { Component } from 'react'
import "../styles/SingleNews.css"

export default class SingleNews extends Component {
    constructor(props){
        super(props)
    }
    render() {
        console.log(this.props.name)
        return (
            <div className="singlenews">
                <div className="singlenews-container">
                    <div className="singlenews-hero">
                        <div><h3>Top 5 Used Computers For 2020</h3></div>
                    </div>
                    <div className="singlenews-text">
                        <p>Dell Optiplex 990 Desktop Computers are perhaps the best an incentive on the auxiliary market. They are sufficiently ongoing to have Core i3, i5, and i7 processors however mature enough to be as modest as $115. Furthermore, that $115 model was over $1,000 new. I wish I could get that sort of reserve funds on a trade-in vehicle. </p>

                            <p>The Dell Optiplex 7010 comes in all structure factors from Ultra Small to Tower and is accessible with a quad-center processor. Rebate Electronics offers in excess of twelve models, and all of them can be uniquely designed. The Optiplex 7010 is the most costly and most impressive utilized PC sold in 2020. </p>

                            <p>It wouldn't be a 'best of rundown' without the Dell Precision Workstations. With costs extending from $145 to $1395 you will undoubtedly discover power inside your financial plan. Each Dell Precision sold by Discount Electronics has a 1-Year Warranty included at no extra expense. </p>

                            <p>Rebate Electronics sells more Dell Optiplex 9020 Desktop Computers to entrepreneurs than some other model. That is on the grounds that these people realize the 9020 is as strong as it is amazing. You can fabricate any of these Optiplex 9020 PCs any way you need, and we will at present transport it today. </p>

                            <p> Last however unquestionably not least is the Dell Optiplex 780. We have sold a greater amount of this reliable monster than the following two models consolidated. They aren't the most remarkable utilized PCs on our site, yet they are the least expensive. You can get one of these overly flexible PCs for under $100, and that incorporates the one-year guarantee.</p>
                    </div>
                </div>
            </div>
        )
    }
}
