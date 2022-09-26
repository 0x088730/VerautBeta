import IntroImage from "../../assets/elements/HomeImage-Top-Left.png"
import LogoImageSet from "../../assets/companylogo/cropped-VERAUT-LOGO.png"
import "./style.scss";
const IntroCategory = () => {
  return (
    <>
      <div className="homeImage">
        <div><img src={IntroImage} alt="homeimage_top"></img></div>
        <div className="intro_set">
          <div className="logo-center">
            <img src={LogoImageSet} alt="img_set" className="logo_sz"></img>
            <div className="wire_st">Your specialist in wireless data communication</div>
          </div>
          <div className="into_col">
            <div className="intro_pd">
              <div className="intro_sb_st">Quickly</div>
              <div className="intro_txt_st">When something isn't working, it's important to <br /> know about it quickly!</div>
              <div className="space-set"></div>
              <div className="intro_sb_st">Dynamic</div>
              <div className="intro_txt_st">Whether it's water, electricity or gas, you've <br /> come to the right place</div>
            </div>
            <div className="intro_pd">
              <div className="intro_sb_st">Efficient</div>
              <div className="intro_txt_st">Nothing is more important than reliably getting <br /> all the data you need</div>
              <div className="space-set"></div>
              <div className="intro_sb_st">Innovative</div>
              <div className="intro_txt_st">New communication options are developed <br /> internally</div>
            </div>
          </div>
          <div className="wire_gap"></div>
          <div className="wire_st" style={{textAlign: "center"}}>
            You cannot CONTROL what you cannot MEASURE !
          </div>
        </div>
      </div>
    </>
  )
}
export default IntroCategory;