const puppeteer = require('puppeteer');

async function run() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    // const profile = 'rajatrao777'; 
    await page.goto('https://ingrammicro.service-now.com');
    await page.setViewport({ width: 1366, height: 768 });
    await page.waitFor(10000);
    /*const EMAIL = '#i0116';
      const PWD = '#i0118';
      const BTN = '#idTxtBx_SAOTCC_OTC';
  
      // const assigned  = '#collapseId283b6424c611228501ffeaea1e115220'; 
      await page.click(EMAIL);
      await page.keyboard.type("rajat.rao@ingrammicro.com");
      // await page.waitFor('input[type=email]');
      // await page.$eval('input[type=email]', el => el.value = 'rajat.rao@ingrammicro.com');
      // await page.waitFor(10000);
      // console.log(document.getElementById("i0116"));
      await page.click('input[type=submit]');
      await page.waitFor(5000);
      await page.click(PWD);
      await page.keyboard.type("");
      await page.click('input[type=submit]');
      //  await page.waitFor(5000);
      //     await page.click(BTN);
      await page.waitFor(35000);
      await page.click('input[type=submit]');
      await page.waitFor(10000);
      await page.click('input[id=idSIButton9]');
      await page.waitFor(30000);
      */
    await page.goto('https://ingrammicro.service-now.com/incident_list.do?sysparm_userpref_module=c13406700a0a3c1201579d1d0bc87b7f&sysparm_query=assignment_group=javascript:getMyGroups()^assigned_to=javascript:getMyAssignments()^ORassigned_toISEMPTY^incident_stateNOT%20IN6,7,11,12^EQ&sysparm_clear_stack=true');
    // // var queue = ;
    // await page.waitForNavigation();
    //  const queue = "div[id='c13406700a0a3c1201579d1d0bc87b7f']";
    //  await page.evaluate((queue)=>{
    await page.waitFor(6000);

    // document.querySelectorAll("a.linked.formlink");
    // await page.waitForSelector('a[href$="short_description"]');  
    // // const page1 = await browser.newPage();
    // await page.click('a[href$="short_description"]');
    // const dimensions = await page.evaluate(() => {
    //   return {
    //     width: document.documentElement.clientWidth,
    //     height: document.documentElement.clientHeight,
    //     deviceScaleFactor: window.devicePixelRatio
    //   };
    // });
    // console.log('Dimensions:', dimensions);

    var arr1 = await page.evaluate(() => {
        var arr = [];

        const s = document.querySelectorAll("a.linked.formlink");
        // console.log("1",document.querySelectorAll("a.linked.formlink"))
        // console.log("2",s[2].href)
        // console.log(s);
        for (var i =5; i < 15; i++) {
            arr[i] = s[i].href;
        }
        // console.log("inside",arr[i]);  
        return arr;
    });
    for (var j =5; j < 15; j++) {
        var pageflag = 0;
        // for(var i=0;i<11;i++){

        //   page1[i] = await browser.newPage();
        //   await page1[i].goto(arr1[i]);
        //   console.log(arr1[i]);
        // }

        const page11 = await browser.newPage();
        await page11.setViewport({ width: 1000, height: 768 });
        await page11.goto(arr1[j]);
        await page11.waitFor(4000);
        // //   await page11.click('button[id=accept_incident]'); 
        //await page11.waitFor(5000);
        // const form = await page11.$('button[id=incident.u_impacted_location_unlock');
        // console.log(form);
        // await form.evaluate(form => form.click());
        pageflag = await page11.evaluate(() => {
            var f1 = document.querySelectorAll(".form-control.disabled");
            var f2 = document.querySelectorAll(".form-control.element_reference_input");

            if ((f1[4].value == "Middleware.SI.EMEA.IMM.SUP") && (f2[0].value == "EDI Admin") && (f2[3].value == "")) {
                console.log("success");
                pageflag = 1;
            }
            else {
                console.log("failure");
                pageflag = 0;
            }
            return pageflag;
        });
        console.log(pageflag, j);
        var impact = "";
        var solution = "";

        if (pageflag == 1) {
            var arr5 = await page11.evaluate(() => {
                var arr4 = [];
                var f3 = document.querySelectorAll("span.sn-widget-textblock-body.sn-widget-textblock-body_formatted");
                console.log("pohcha");
                if (f3[0].innerHTML.indexOf("genxml_SI_EURONICS_PRICELIST_") > 0 || f3[0].innerHTML.indexOf("genxml_SI_ADVANCEAS_CUSTOMERINFO_") > 0 || f3[0].innerHTML.indexOf("genxml_SI_ELKJOP1-NO_PRICELIST_") > 0 || f3[0].innerHTML.indexOf("genxml_SI_DKCUST_CUSTOMERINFO_") > 0 || f3[0].innerHTML.indexOf("genxml_SI_TELERING_CUSTOMERINFO_") > 0 || f3[0].innerHTML.indexOf("genxml_SI_EXPERTNO_CUSTOMERINFO_") > 0 ||f3[0].innerHTML.indexOf("genxml_SI_EXPERTFI_CUSTOMERINFO_") > 0) {
                    impact = "Sweden - Boras";
                    solution = "//Restarted";
                }
                else if (f3[0].innerHTML.indexOf("xml_SEPROD_TELE2_COLINERESERVED1_") > 0 || f3[0].innerHTML.indexOf("xml_XPP-SE100_TELE2_COURIERSTATUS_") > 0 || f3[0].innerHTML.indexOf("xml_SEPROD_TELE2_ORDRSP_") > 0||f3[0].innerHTML.indexOf("xpp_IMM_Hi3G_COURIERSTATUS_") > 0||f3[0].innerHTML.indexOf("genxml_SEPROD_TELE2_DESPATCHADVISE_") > 0||f3[0].innerHTML.indexOf("Error: XPP Error: Not all Products found in XPP") > 0) {
                    impact = "Sweden - Boras";
                    solution = "//Ignore";
                }
                else if (f3[0].innerHTML.indexOf("xml_XPP-ALL_ALL_DISPATCHADVICE_") > 0) {
                    impact = "Sweden - Boras";
                    solution = "//Informed to business";
                }
                else if (f3[0].innerHTML.indexOf("genxml_PTPROD_BPPTMSH_INVOICE_") > 0||f3[0].innerHTML.indexOf("genxml_PTPROD_STAPLESPT_INVOICE_") > 0||f3[0].innerHTML.indexOf("genxml_PTPROD_AUCHANPT_INVOICE_") > 0||f3[0].innerHTML.indexOf("genxml_PTPROD_RADPOP_INVOICE_") > 0) {
                    impact = "Portugal - Lisbon";
                    solution = "//Processed";
                }
                else if (f3[0].innerHTML.indexOf("new charge type. Map change required...!!!") > 0){
                    impact = "Portugal - Lisbon";
                    solution = "//Ignore";
                }
                else if (f3[0].innerHTML.indexOf("genxml_SEPROD_COMM2IG_INVOICE_") > 0) {
                    impact = "Sweden - Boras";
                    solution = "//Informed to xpp team";
                }
                else if (f3[0].innerHTML.indexOf("xml_SEPROD_TELE2-NAV_PURCHASEORDERRECEIPT_") > 0 || f3[0].innerHTML.indexOf("XPP Error: Purchase order line was not processed in this instance of XPP for Order No") > 0) {
                    impact = "Sweden - Boras";
                    solution = "//Informed to xpp team";
                }
                else if (f3[0].innerHTML.indexOf("ff_VODAFONEUK_SI_SALESORDER_") > 0) {
                    impact = "UK Anovo - Norwich";
                    solution = "//Processed";
                }
                else if (f3[0].innerHTML.indexOf("genxml_SKPROD_ZOUND_RMARECEIPT_") > 0) {
                    impact = "Slovakia - Lozorno";
                    solution = "//Informed to business";
                }
                else if (f3[0].innerHTML.indexOf("ff_SAPSTP_EPIC_MATMAS_") > 0||f3[0].innerHTML.indexOf("BP.IFS.ShopOrder.clsShopOrderF.funcCreateBulkShopOrder") > 0) {
                    impact = "Slovakia - Lozorno";
                    solution = "//Ignore";
                }
                else if (f3[0].innerHTML.indexOf("xml_NLPROD_INTELEMATICS-AA_SHOPORDERSI_") > 0) {
                    impact = "Netherlands - Tilburg";
                    solution = "//Ignore";
                }
                else if (f3[0].innerHTML.indexOf("genxml_VODAFONEANNOVO_NLPROD_VFPURCHASEORD_") > 0 || f3[0].innerHTML.indexOf("Filename:  [Error: 400]") > 0||f3[0].innerHTML.indexOf("xml_NLPROD__SHOPORDERSI_") > 0||f3[0].innerHTML.indexOf("Error: 500 or 404 ERROR") > 0) {
                    impact = "Netherlands - Tilburg";
                    solution = "//Ignore";
                }
                else if (f3[0].innerHTML.indexOf("xml_IMM_Hi3G_COURIERSTATUS_") > 0 || f3[0].innerHTML.indexOf("xml_IMM_Hi3G_DISPATCH-AAI_") > 0||f3[0].innerHTML.indexOf("Error in getting PORECEIPT info from XPP") > 0||f3[0].innerHTML.indexOf("http_SEPROD_TELENOR_DESPATCHADVISE_") > 0) {
                    impact = "Sweden - Boras";
                    solution = "//Processed";
                }
                else if (f3[0].innerHTML.indexOf("http_SKPROD_ZOUND_ORDRSP_") > 0||f3[0].innerHTML.indexOf("http_SKPROD_ZOUND_ZOUNDSTATUS_") > 0||f3[0].innerHTML.indexOf("xml_SKPROD_KAZAM_SHOPORDERSI_") > 0) {
                    impact = "Slovakia - Lozorno";
                    solution = "//Processed";
                }
                else if (f3[0].innerHTML.indexOf("genxml_SEPROD_COMM2IG_INVOICE_") > 0 && f3[0].innerHTML.indexOf("No files to collect") > 0) {
                    impact = "Sweden - Boras";
                    solution = "//Informed to XPP Team";
                }
                else {
                    // await page11.close();
                    // break;
                    impact = "nahi";
                    solution = "nahi";
                }

                arr4[0] = impact;
                arr4[1] = solution;
                // console.log(arr4[0],arr4[1]);
                // console.log("pehle",impact);
                return arr4;
            });

            console.log("impact",arr5[0],"solution",arr5[1]);
            if (arr5[0] == "nahi") {
                await page11.close();

            }
            else {
                await page11.evaluate(() => {
                    // var b15 = [];
                    var f4 = document.querySelectorAll("span.icon.icon-locked");
                    // console.log("Sahi hai",button15[2]);
                    // b15=button15[2];
                    // console.log("bamai",b15);
                    f4[2].click();
                    // return button15;
                });

                await page11.waitFor(2000);
                await page11.evaluate(() => {
                    var f5 = document.querySelectorAll(".form-control");
                    f5[32].click();
                });

                await page11.waitFor(2000);
                await page11.keyboard.type(arr5[0]);
                await page11.keyboard.press("Enter");
                // await page.select('#incident.category', 'Application');
                await page11.waitFor(2000);
                // await page11.close();

                await page11.evaluate(() => {
                    var f6 = document.querySelectorAll(".form-control");
                    f6[9].click();
                    f6[9].setValue("Application");
                    // f4[10].click();
                    // f4[10].setValue("Request");
                });
                await page11.waitFor(3000);
                await page11.evaluate(() => {
                    var f7 = document.querySelectorAll("button.form_action_button.header.action_context.btn.btn-default");
                    f7[0].click();
                });
                await page11.waitFor(5000);

                await page11.evaluate(() => {
                    var f8 = document.querySelectorAll(".form-control");
                    // f4[9].click();
                    // f4[9].setValue("Application");
                    f8[10].click();
                    f8[10].setValue("Request");
                });
                //console.log("just",arr5[1]);
                
                await page11.evaluate((proposed_solution) => {
                    var f9 = document.querySelectorAll(".form-control");
                    // f4[9].click();
                    // f4[9].setValue("Application");
                    //var proposed=arr5[1];
                   // console.log("just badme",proposed);
                    f9[39].click();
                    f9[39].setValue(proposed_solution);
                },arr5[1]);

                await page11.waitFor(3000);
                // await page11.keyboard.type("//Processed");
                await page11.evaluate(() => {
                    var f10 = document.querySelectorAll(".form-control");
                    // f4[9].click();
                    // f4[9].setValue("Application");
                    f10[40].click();
                    f10[40].setValue("resolve");

                });
                // await page11.keyboard.press("Enter");
                await page11.evaluate(() => {
                    var f11 = document.querySelectorAll("button.form_action_button.header.action_context.btn.btn-default");
                    f11[5].click();
                });
                await page11.waitFor(5000);
                await page11.evaluate(() => {
                    var f12 = document.querySelectorAll(".form-control");
                    // f4[9].click();
                    // f4[9].setValue("Application");
                    f12[41].click();
                    f12[41].setValue("workaround");

                });
                await page11.waitFor(3000);
                await page11.evaluate(() => {
                    var f13 = document.querySelectorAll("button.form_action_button.header.action_context.btn.btn-default");
                    f13[0].click();
                });
                await page11.waitFor(5000);
                await page11.close();
            }
        }
        else {
            console.log("failure1");
            await page11.close();
        }
    }

    /**/
    /*
    // console.log(b1);
    // await b1.click();
    // console.log("Sahi hai bola tha",b1);
    // //   await page11.click(b15);
    //console.log(b15);
    // console.log("3",u1);
    // await page.waitFor(5000);
    // const page1 = await browser.newPage();
    // // console.log(u1[2].href);
    // await page1.waitFor(5000);
    // await page1.goto(u1);
    // var b = window.open(a[0].click(),'_blank');  
    // b.focus();
    //    var frame = document.querySelector('iframe');
    //    var frameDocument = frame.contentDocument;
    //    frameDocument.querySelector(queue).click();
    //   } ,queue);
    //  await queue.click();
    //  await page.waitForNavigation();
    //    await page.waitFor(10000);                
    // //   await page.waitFor(60000);
    // //   const button = 
    //  console.log("done 1 min");
    //  await page.waitFor(10000);
    //   const ABC = await page.url();
    // console.log(ABC);
    //  if(ABC==="https://ingrammicro.service-now.com/nav_to.do?uri=%2Fhome.do"){
    //    console.log("success");
    //  }
    //  else{
    //    console.log("fail");
    //  }
    //const f = document.querySelectorAll("span.sn-widget-textblock-body.sn-widget-textblock-body_formatted");
    //await page.setViewport({width:1280,height:800});  
    // await page.screenshot({ path: 'imserve.png' });  
    /// f[0].innerHTML.indexOf("CDON-AB")
    // browser.close();
    */
}

run();