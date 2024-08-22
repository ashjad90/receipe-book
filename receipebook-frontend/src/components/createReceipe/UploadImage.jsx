import React, { memo, useState } from "react";
import receipeCss from "../../styles/pages/newReceipe.module.scss";

function UploadImage({values, setValues}) {
  console.log('upload image');
  function handleChange(e){
    setValues({...values,[e.target.name]:e.target.value});
  }
  return (
    <section className={receipeCss.receipeImgSection}>
      <h2>Upload</h2>
      <div>
        <div className={receipeCss.imgCard}>
          <div className={receipeCss.imgThumbnail}>
            {values.url ? (
              <img alt="receipe" src={values.url} />
            ) : (
              <img
                alt="receipe"
                className={receipeCss.blankImg}
                src="https://th.bing.com/th/id/OIP.52ubPXuujNqn0n8TOTAf6AHaHa?rs=1&pid=ImgDetMain"
              />
            )}
          </div>
        </div>
        <div className="input-group">
          <input
            placeholder="Paste Image Url here"
            name="url"
            onChange={handleChange}
            type="text"
            value={values.url}
          />
        </div>
        <div className={receipeCss.time}>
          <div className="input-group">
            <label htmlFor="prepTime">Prep (min)</label>
            <input type="number" id="prepTime" name="prepTime" required value={values.prepTime} onChange={handleChange}/>
          </div>
          <div className="input-group">
            <label htmlFor="cookTime">Cook (min)</label>
            <input type="number" id="cookTime" name="cookTime" required value={values.cookTime} onChange={handleChange}/>
          </div>
          <div className="input-group">
            <label htmlFor="serves">Serves (ppl)</label>
            <input type="number" id="serves" name="serves" required value={values.serves} onChange={handleChange}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(UploadImage);
