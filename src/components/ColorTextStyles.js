import "./ColorTextStyles.css";

const ColorTextStyles = () => {
  return (
    <div className="color-text-styles">
      <div className="information">
        <img className="background-icon" alt="" src="/background@2x.png" />
        <div className="content">
          <img className="icon" alt="" src="/icon@2x.png" />
          <div className="button">Button</div>
        </div>
      </div>
      <div className="information1">
        <img className="background-icon" alt="" src="/background@2x.png" />
        <div className="content1">
          <img className="icon" alt="" src="/icon@2x.png" />
          <div className="button">Navigation</div>
        </div>
      </div>
      <div className="theme-color">
        <div className="color">
          <div className="div">
            <div className="grey-1" />
            <div className="grey-11">Grey 1</div>
          </div>
          <div className="div1">
            <div className="grey-2" />
            <div className="grey-21">Grey 2</div>
          </div>
          <div className="div2">
            <div className="white" />
            <div className="grey-11">White</div>
          </div>
          <div className="div3">
            <div className="grey-3" />
            <div className="grey-21">Grey 3</div>
          </div>
          <div className="div4">
            <div className="primary" />
            <div className="primary1">Purple</div>
          </div>
          <div className="div5">
            <div className="secondary" />
            <div className="secondary1">Orange</div>
          </div>
          <div className="div6">
            <div className="tertiary" />
            <div className="tertiary1">Yellow</div>
          </div>
          <div className="div7">
            <div className="quatinery" />
            <div className="quatinery1">Text</div>
          </div>
          <div className="div8">
            <div className="success" />
            <div className="grey-21">Green</div>
          </div>
          <div className="div9">
            <div className="danger" />
            <div className="danger1">Red</div>
          </div>
          <div className="div10">
            <div className="warning" />
            <div className="warning1">Background</div>
          </div>
        </div>
        <div className="theme-color1">Theme Color</div>
      </div>
      <div className="transparant">
        <div className="color1">
          <div className="div11">
            <div className="primary2" />
            <div className="primary3">Purple 10%</div>
          </div>
        </div>
        <div className="theme-color1">Transparent Color</div>
      </div>
      <div className="gradient-color">
        <div className="color2">
          <div className="div12">
            <div className="primary4" />
            <div className="primary5">Linear 1</div>
          </div>
          <div className="div13">
            <div className="secondary2" />
            <div className="primary6">Linear 2</div>
          </div>
          <div className="div14">
            <div className="tertiary2" />
            <div className="tertiary1">Linear 3</div>
          </div>
        </div>
        <div className="theme-color1">Gradient Color</div>
      </div>
      <div className="information2">
        <img className="background-icon" alt="" src="/background@2x.png" />
        <div className="content2">
          <img className="icon" alt="" src="/icon@2x.png" />
          <div className="button">Colors</div>
        </div>
      </div>
      <div className="text">
        <div className="text1">
          <div className="paragraph-bold">Text Regular 2</div>
          <div className="paragraph-semi-bold">Text Regular 1</div>
        </div>
        <div className="text2">
          <div className="paragraph-bold1">Text Medium 2</div>
          <div className="paragraph-semi-bold1">Text Medium 1</div>
        </div>
        <div className="text3">
          <div className="paragraph">{`Text Semi Bold 2 `}</div>
          <div className="paragraph-lead">{`Text Semi Bold 1 `}</div>
        </div>
      </div>
      <div className="heading">
        <b className="h1-heading">H1 Heading</b>
        <b className="h2-heading">H2 Heading</b>
        <b className="h3-heading">H3 Heading</b>
        <b className="h4-heading">H4 Heading</b>
        <b className="h5-heading">H5 Heading</b>
        <b className="h5-heading1">H6 Heading</b>
      </div>
      <div className="information3">
        <img className="background-icon" alt="" src="/background@2x.png" />
        <div className="content3">
          <img className="icon" alt="" src="/icon@2x.png" />
          <div className="button">Typography</div>
        </div>
      </div>
      <div className="button1">
        <div className="btncta">
          <div className="background" />
          <b className="b">+</b>
        </div>
        <div className="mail-button">
          <div className="background1" />
          <img className="email-icon" alt="" src="/email@2x.png" />
        </div>
        <div className="btnviewmore">
          <div className="background2" />
          <div className="view-more">View More</div>
        </div>
        <div className="button2">
          <div className="submit-button">
            <div className="submit">Submit</div>
          </div>
          <div className="draft-button">
            <div className="submit">Save as Draft</div>
          </div>
        </div>
        <div className="new-student-button">
          <div className="content4">
            <img className="icon4" alt="" src="/@2x.png" />
            <div className="new-student">New Student</div>
          </div>
        </div>
        <div className="sort">
          <div className="content5">
            <div className="submit">Newest</div>
            <img className="dropdown-icon" alt="" src="/dropdown@2x.png" />
          </div>
        </div>
      </div>
      <div className="navigation1">
        <b className="h1-heading">Food Details</b>
        <div className="menu">
          <img className="placeholder-icon" alt="" src="/placeholder@2x.png" />
          <div className="name">
            <div className="nabila-a">Nabila A.</div>
            <div className="admin">Admin</div>
          </div>
          <div className="wrapper-notification">
            <img
              className="notification-icon"
              alt=""
              src="/notification@2x.png"
            />
          </div>
          <div className="setting">
            <div className="bg" />
            <img className="gear-icon" alt="" src="/gear@2x.png" />
          </div>
        </div>
        <div className="search-bar">
          <div className="search-parent">
            <img className="dropdown-icon" alt="" src="/search@2x.png" />
            <div className="submit">Search here...</div>
          </div>
        </div>
      </div>
      <div className="pagination">
        <div className="showing-1-5-from-container">
          <span>{`Showing `}</span>
          <span className="span">{`1-5 `}</span>
          <span>from</span>
          <span className="span">{` 100 `}</span>
          <span>data</span>
        </div>
        <div className="page">
          <img className="dropdown-icon1" alt="" src="/dropdown@2x.png" />
          <div className="div15">
            <div className="selectedpage" />
            <div className="div16">1</div>
          </div>
          <div className="div17">
            <div className="background3" />
            <div className="div18">2</div>
          </div>
          <div className="div17">
            <div className="background3" />
            <div className="div18">3</div>
          </div>
          <img className="dropdown-icon1" alt="" src="/dropdown@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default ColorTextStyles;
