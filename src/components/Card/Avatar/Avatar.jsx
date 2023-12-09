import React from "react";
import styles from "./Avatar.module.css";

const AvatarWithStatus = ({ statusColor, grouping, indashBoard }) => {
  return (
    <>
      {indashBoard ? (
        <div className={styles.avatarContainer}>
          <img
            src={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACUCAMAAAAj+tKkAAAAkFBMVEX///8AESEAAAAAABju8PBSVFz///38/PwAEiD+/f8AAA0AAAoAAA8AABMAAAMDEyQAABsADB6fo6cnKjLc3+BydXoABhymqay9wMOvsrRucHZTWFx6foKKj5LJystaXV8lJysaHi2SlpuDhotnam0ACRgqLjsIDxgOFCQhJC81NzpFSE0aHCYWHCIzNj7P09Xk7nGGAAAEqUlEQVR4nO2bCVPqPBSG09PYpBulC23ZihdZ5INL//+/+04qKIiUoClx5uZxVBwV3zl7TpAQg8FgMBgMBoPBYDAYDAaDwUAc5/jZYQ5x9Yq5pFFHM4Q2X/86gbRKnl5B0HtdFDXTrecdRlw0Hp3PXsHLLUGc92CzKJgwquvo1kcYQ4nz//wwtj6IYh+2QxGO+i2J+VCNoW+dEeF7H0Y1cfSHokuKXRBZn4kibvVWpeZccZjL2ATiC3kH+lCgQqYxDrH0Tbyr+qwo/1sQrSXRIQlEl/49SRaoiNZELncxx2i7znKV6bQg24ct4hr8hT55hLxAi38PXoahPn3Zc35Ln8X7W6pHncucac9qi7+DQj8hrpYwdLP9bQMi3oJqEeiSEmT0WctdrSWRGVn4UgI5JETPzLCT8jBWmrGeYp3Jediy8lc9AmtZgTHoKTSSOYJApkXgUF5gbQR+RXm7Eet1cQW3+1xDpEmgdJmJbU1Da8uwf0a41SRwG8gJhKkmgYWcj+NQz7nEIVkq5WP7iWoxIGNs4N2WF1kw17ZgKNcSBsxTPUWmYSYRhZgi+siCm1EY7jWdmQQOSVDh9dVCHPH4b6l1tcBG2O/aWrLIEI0C3fZqzS1vpHWJ6TKXZNvriRLDiIrzszaBb4x6mCmcn442zReRvZ5rliZwCUuCz+dPEZURbIa/YgXsYs8bB58nm9xbDyj5BTv0txrCylEKdnzY1PA4gP0Ex3wMUd3x9w6rkz0c8Z+KTL9vzxG+dLNyWBTDsum9v07gqS8d5v6G6GsyWFwgOk2knUrE5BXlzxEXi0zrjprQYrx7qcWFxJkMV/S37GU3LijRtNpqYMkWwriXTi5P5qyepBCHsE00TTNoIjpcQZ9HPMp7sJ9WGT2YitGsmu7Bz0WH6cNqSJsYeGTFYQ7qy2Y9+70whwDpbDBNiiKZDmYrgI9v2b1ZhnnDHulpzACWPAfx2WohtsMwDAL8YOdnQ2IcPifssUOXS+gEcutUBsfH/DhlfTx++5EcJvRxucLwrd76rXPqBd5WXIk9xooYTNXOk1wcHYn8dYW/+aCSWG7Cu8xniQgIN9WjvFxhcbnPweL8FNl+1b02EX/lMr7Tvwfyddl942Mk+2Pf1vIl3P6TdZ0n2HxTyaXbBVhwvJR2OeZg+jps4H/Pv0Ih5vKEku6mB9Gs5tKr/a/BgzzprOnh89a+5Nr3GrHf4ZUEpvD4uwF4JPLGrCsXY7tP5C5gW/GT7rY1NJW8gG0jT7vaCDtk8MMMeQMmXRVDiXWlFH4nO2EM7Zfg2yXwFB68dDFeY4/bqDGgtdxknSRyARKvkpGBQ6FeHR5C0u8OCRfYG1d5pXFwClSlDxO5i8uxH0wJn+H+QL1Auu3f/suydPGCs3KnKIcF4vZENT+ds84B5et1trj3oNkG9xaqCyFNlypdvExVB2Ed8HuPwi1EPFA9tw5lX4MiB1f+ytY5cJUu5sqzZApqXaz8mnuo2oKqXZyt7t4XtRCFK+VDa7mGsG+roN8PYa28kzBC56PZ+EkB49lorn7f2sxvVBGEqD95OkzZP644Kp/MYDAYDAaDwWAwGAwGg8HwL/M/rtVGtP3V0TUAAAAASUVORK5CYII="
            }
            alt="MG"
            className={styles.avatar}
          />
          <span
            className={styles.status}
            style={{ backgroundColor: statusColor }}
          />
        </div>
      ) : (
        <div></div>
      )}    
    </>
  );
};

export default AvatarWithStatus;
