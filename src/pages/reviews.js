import React from "react"
import Row from "../components/Row"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import styled from "@emotion/styled"
import headSeperator from "../images/heading-seperator-white.png"
import ReviewBg from "../images/melbourne-view.jpg"
import AustraliaMap from "../images/australia-red-white-map-large.png"

const Wrap = styled(Row)({})

const ReviewStyle = {
  width: "100%",
  height: "auto",
  backgroundImage: `url(${ReviewBg})`,
  backgroundSize: "cover",
}

const H1 = styled.h1({
  fontSize: "48px",
  marginBottom: "20px",
  marginTop: "0px",
  fontWeight: 800,
  color: "#fff",
})

const P = styled.p({
  lineHeight: "28px",
  marginTop: "0px",
  marginBottom: "15px",
  color: "#fff",
  fontSize: "20px",
  fontWeight: 600,
})

const ReviewHead = styled.div({
  textAlign: "center",
  padding: "80px 0",

  img: {
    marginBottom: "25px",
  },
})
const imageMapwaText = styled.div({})
const imageMapntText = styled.div({})
const imageMapqldText = styled.div({})
const imageMapsaText = styled.div({})
const imageMapvicText = styled.div({})
const imageMaptasText = styled.div({})
const imageMapnswText = styled.div({})
const imageMapactText = styled.div({})

const ImageMap = styled.div({})

const Reviews = () => (
  <Layout>
    <Seo title="Reviews" />
    <Wrap style={ReviewStyle}>
      <ReviewHead>
        <H1>Reviews</H1>
        <img src={headSeperator} alt="head-seperator" />
        <P>5 Star Rated Web Design Agency</P>
        <ImageMap>
          <img
            id="Image-Maps-large"
            src={AustraliaMap}
            alt="Australia Map"
            usemap="#image-maps-2019-08-07-033101"
            width="1000"
            height="857"
            border="0"
          />
          <p>
            <map id="ImageMapslarge" name="image-maps-2019-08-07-033101">
              <area
                title="Image Map"
                alt="Image Map"
                coords="998,855,1000,857"
                shape="rect"
                href="http://www.image-maps.com/index.php?aff=mapped_users_0"
              />
              <area
                className={imageMapwaText}
                alt="Western Australia"
                coords="354,99,363,543,335,553,310,558,284,568,263,584,263,598,238,612,221,612,193,609,180,614,178,623,173,628,159,631,142,643,129,656,117,662,70,621,88,613,92,591,91,575,88,560,77,543,66,525,60,516,59,506,43,483,24,461,8,449,8,428,15,442,22,417,19,404,2,375,3,367,7,357,0,334,5,332,14,342,30,315,58,292,88,281,110,263,125,259,154,246,178,229,179,215,200,193,200,183,194,177,204,159,220,172,236,160,229,149,251,151,245,138,248,128,261,118,265,105,279,100,278,85,292,86,307,76,325,97,338,110,352,99"
                shape="poly"
                href="https://www.makemywebsite.sydney/mmw/western-australia/"
                target="_self"
              />
              <area
                className={imageMapntText}
                alt="Northern Territory"
                coords="366,108,373,395,577,386,581,148,571,140,560,136,548,120,529,109,520,101,520,94,526,77,524,54,543,60,547,44,561,30,543,29,526,32,505,31,483,20,465,19,458,18,438,5,456,19,449,30,439,37,421,37,411,34,399,42,377,81,384,100,380,110,374,111"
                shape="poly"
                href="https://www.makemywebsite.sydney/mmw/northern-territory/"
                target="_self"
              />
              <area
                className={imageMapqldText}
                alt="Queensland"
                coords="592,152,589,386,652,382,650,468,720,479,797,481,817,480,834,485,845,479,860,486,874,486,892,496,899,491,902,480,930,484,923,464,934,422,915,398,905,374,894,377,882,339,890,330,872,320,868,325,860,320,858,288,843,270,848,260,832,250,820,254,810,229,797,225,791,218,788,182,773,150,772,115,761,100,741,98,730,88,731,60,720,39,720,31,724,27,719,19,716,1,701,23,692,39,697,48,679,70,691,83,689,99,677,127,667,145,664,162,648,169,626,166,606,152,596,151"
                shape="poly"
                href="https://www.makemywebsite.sydney/mmw/queensland/"
                target="_self"
              />
              <area
                className={imageMapsaText}
                alt="Southern Australia"
                coords="373,407,640,394,633,603,630,606,632,699,621,701,619,683,604,657,593,641,581,642,584,630,586,613,583,607,573,606,585,575,575,566,564,570,557,583,548,592,531,603,520,621,521,601,494,574,492,553,480,544,467,545,452,542,424,536,397,532,376,536,374,413"
                shape="poly"
                href="https://www.makemywebsite.sydney/mmw/south-australia/"
                target="_self"
              />
              <area
                className={imageMapvicText}
                alt="Victoria"
                coords="641,618,660,614,664,630,687,633,684,641,720,676,729,665,743,667,758,676,785,678,775,694,795,716,769,713,749,737,722,719,702,718,689,724,686,733,672,724,660,715,643,707"
                shape="poly"
                href="https://www.makemywebsite.sydney/mmw/victoria/"
                target="_self"
              />
              <area
                className={imageMaptasText}
                alt="Tasmania"
                coords="710,787,739,801,761,802,770,794,773,821,760,829,759,850,751,848,735,856,727,856,717,844,718,819,701,802"
                shape="poly"
                href="https://www.makemywebsite.sydney/mmw/tasmania/"
                target="_self"
              />
              <area
                className={imageMapnswText}
                alt="New South Wales"
                coords="649,479,815,490,831,494,846,491,854,495,868,494,878,501,883,511,892,508,903,502,910,497,910,493,927,495,908,532,901,549,906,561,891,576,887,578,888,589,867,606,848,633,841,636,816,701,819,714,792,692,801,703,791,691,796,680,790,669,799,645,804,630,801,612,791,604,778,606,772,616,769,632,775,646,784,653,797,647,789,668,788,671,778,668,762,666,752,661,745,655,736,657,723,653,717,658,696,638,695,628,683,619,671,620,667,602,645,604"
                shape="poly"
                href="https://www.makemywebsite.sydney/mmw/new-south-wales/"
                target="_self"
              />
              <area
                className={imageMapactText}
                alt="Australian Capital Territory"
                coords="789,613,795,621,793,633,790,641,783,642,779,631,782,616"
                shape="poly"
                href="https://www.makemywebsite.sydney/mmw/australian-capital-territory/"
                target="_self"
              />
            </map>
          </p>
        </ImageMap>
      </ReviewHead>
    </Wrap>
  </Layout>
)

export default Reviews
