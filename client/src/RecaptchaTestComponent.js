import React from 'react';
import { ReCaptcha } from 'react-recaptcha-google';


class RecaptchaTestComponent extends React.Component {
  
  constructor(props, context) {
    super(props, context);
    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
  }

  componentDidMount() {
    if (this.formCaptcha) {
        console.log("started, just a second...")
        this.formCaptcha.reset();
        this.formCaptcha.execute();
    }
  }

  onLoadRecaptcha() {
      if (this.formCaptcha) {
          this.formCaptcha.reset();
          this.formCaptcha.execute();
      }
  }

  verifyCallback(recaptchaToken) {
    // Here you will get the final recaptchaToken!!!  
    console.log(recaptchaToken, "<= your recaptcha token")
  }

  render() {
    return (
      <div>
        {/* You can replace captchaDemo with any ref word */}
        <ReCaptcha
            ref={(el) => {this.formCaptcha = el;}}
            size="invisible"
            render="explicit"
            sitekey="6LfjLuQUAAAAAETa6GmzKC3ZH3mc8Wp-dudnV9yv"
            onloadCallback={this.onLoadRecaptcha}
            verifyCallback={this.verifyCallback}
        />
      </div>
    );
  };
};

export default RecaptchaTestComponent;