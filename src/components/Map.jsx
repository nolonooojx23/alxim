import React from "react";
import "./Map.css";

function Map() {
  return (
    <div id="Map">
      <div
        className="map"
        style={{ position: "relative", padding: "20px", overflow: "hidden" }}
      >
        <a
          href="https://yandex.uz/maps/org/al_kimyogar_pharm/10514939751/?utm_medium=mapframe&utm_source=maps"
          //   style="color:#eee;font-size:12px;position:absolute;top:0px;"
          style={{
            color: "#eee",
            fontSize: "12px",
            position: "absolute",
            top: "0px",
          }}
        >
          Al Kimyogar Pharm{" "}
        </a>
        <a
          href="https://yandex.uz/maps/org/al_kimyogar_pharm/10514939751/?utm_medium=mapframe&utm_source=maps"
          style={{
            color: "#eee",
            fontSize: "12px",
            position: "absolute",
            top: "14px",
          }}
        >
          Аптека в Фергане
        </a>
        <iframe
          src="https://yandex.uz/map-widget/v1/?ll=71.782536%2C40.384340&mode=search&oid=10514939751&ol=biz&rl=71.763227%2C40.392942&rlt=area&utm_medium=mapframe&utm_source=maps&z=17"
          //   width="560"
          // width={800}
          height={600}
          //   height="400"
          //   frameborder="1"
          frameBorder={1}
          allowFullScreen={true}
          //   style={{position:"relative", width:'100%', borderRadius:"20px", border:"2px solid #002940", maxWidth:"1400px", margin:"auto"}}
        ></iframe>
      </div>
    </div>
  );
}

export default Map;

