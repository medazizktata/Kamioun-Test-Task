import React from "react";

export default function PersonalInfo() {
  return (
    <div className="font-montserrat">
      <table
        className="bg-white w-[35%] w-full max-w-[450px] rounded-2xl p-[20px] shadow-xl"
        border="0"
        cellPadding="0"
        cellSpacing="0"
        style={{
          backgroundImage:
            "url('https://firebasestorage.googleapis.com/v0/b/mail-signature-2e3a3.appspot.com/o/img%2Fbg135b9e.png?alt=media&token=0c4fe247-f017-4291-87d1-fce91a3e9ce3')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "50px 100%",
        }}
      >
        <tbody>
          <tr>
            <td width="0%" valign="top">
              <div className="image-container">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/mail-signature-2e3a3.appspot.com/o/img%2FDSC06001-1v3-1by1.png?alt=media&token=9b5bfc8e-c5fd-4431-adb6-2e4c5c1f6a5b"
                  width="150px"
                  height="150px"
                  className="rounded-2xl mt-5 ml-2"
                  alt=""
                />
              </div>
              <p className="text-right my-[10px] ">
                <a href="https://www.facebook.com/mohamedaziz.ktata">
                  <img
                    className="w-[18px] ml-[7px] inline-block	"
                    src="https://firebasestorage.googleapis.com/v0/b/mail-signature-2e3a3.appspot.com/o/img%2Ffacebook135b9e.png?alt=media&token=aecacb5c-6c2b-4d37-b47d-86a1b5969513"
                    alt=""
                  />
                </a>
                <a href="https://www.instagram.com/med_aziiz_ktata7?igsh=aTdwNWhhcTd0ZGdi">
                  <img
                    className="w-[18px] inline-block	ml-[7px]"
                    src="https://firebasestorage.googleapis.com/v0/b/mail-signature-2e3a3.appspot.com/o/img%2Finstagram135b9e.png?alt=media&token=c25d90f0-f58d-4da9-9a6f-cfaf00985ab3"
                    alt=""
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohamed-aziz-ktata-45a3aa210/"
                  style={{ textDecoration: "none" }}
                >
                  <img
                    className="w-[18px] inline-block	ml-[7px]"
                    src="https://firebasestorage.googleapis.com/v0/b/mail-signature-2e3a3.appspot.com/o/img%2Flinkedin135b9e.png?alt=media&token=72b368ef-02bd-4458-8c7d-fb22078e05a8"
                    alt=""
                  />
                </a>
              </p>
            </td>
            <td width="70%" valign="top" className="py-[20px] pl-[20px]">
              <h3 className="mr-[5px] text-[20px] text-blueCustom">
                Mohamed Aziz Ktata
              </h3>
              <h4 className="mr-[5px] text-[14px] text-greyCustom">
                Software Engineering Student
              </h4>
              <h6 className="mr-[5px] text-[14px] text-greyCustom">
                National Engineering School of Tunis (ENIT)
              </h6>

              <div className="h-[0.5px] bg-greyCustom w-full my-[10px]"></div>

              <p className="mr-[5px] text-greyCustom text-[12px]">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/mail-signature-2e3a3.appspot.com/o/img%2Fplaceholder135b9e.png?alt=media&token=8ddea6db-81e0-470c-a319-3dd6e1bad137"
                  className="mr-[5px] w-[12px] inline-block "
                  alt=""
                />
                Manar 1, Tunis, Tunisia
              </p>
              <p className="mr-[5px] text-greyCustom text-[10px] ">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/mail-signature-2e3a3.appspot.com/o/img%2Fphone135b9e.png?alt=media&token=bc229221-494d-4233-96b8-fac6158a8582"
                  className="mr-[5px] w-[12px] inline-block "
                  alt=""
                />
                +216 54 999 317
              </p>
              <p className="mr-[5px] text-greyCustom text-[12px]">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/mail-signature-2e3a3.appspot.com/o/img%2Femail135b9e.png?alt=media&token=15b42696-6b2c-4d11-b587-ffdbc0195d8e"
                  className="mr-[5px] w-[12px] inline-block "
                  alt=""
                />
                aziiizktata7@gmail.com
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
