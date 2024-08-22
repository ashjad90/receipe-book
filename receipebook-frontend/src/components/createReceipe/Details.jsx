import React, { memo } from "react";
import receipeCss from "../../styles/pages/newReceipe.module.scss";
import { useParams } from "react-router-dom";

function Details({values, setValues}) {
  console.log('Details');
  const params =  useParams("id");
  const isEdit = params&&params.id?true:false;
  function handleChange(e){
    setValues({...values,[e.target.name]:e.target.value});
  }
  return (
    <section className={receipeCss.receipeTitleSection}>
      <h2>Details</h2>
      <div>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" onChange={handleChange} value={values.name} disabled={isEdit?"disabled":null}/>
        </div>
        <div className="input-group">
          <label htmlFor="description">Description</label>
          <input type="text" id="description" name="description" onChange={handleChange} value={values.description}/>
        </div>
        <div className="input-group">
          <label htmlFor="process">Process</label>
          <textarea type="text" id="process" name="process" onChange={handleChange} value={values.process}/>
        </div>
      </div>
    </section>
  );
}

export default memo(Details);
