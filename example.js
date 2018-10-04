const puppeteer = require('puppeteer');

async function run() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    // const profile = 'rajatrao777'; 
    await page.goto('https://ingrammicro.service-now.com/nav_to.do?uri=%2Fhome.do');
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
    await page.keyboard.type("Rabbit7Rabbit");
    await page.click('input[type=submit]');
    //  await page.waitFor(5000);
    //     await page.click(BTN);
    await page.waitFor(35000);
    await page.click('input[type=submit]');
    await page.waitFor(10000);
    await page.click('input[id=idSIButton9]');
    await page.waitFor(30000);*/
    await page.goto('https://ingrammicro.service-now.com/incident_list.do?sysparm_userpref_module=c13406700a0a3c1201579d1d0bc87b7f&sysparm_query=assignment_group=javascript:getMyGroups()^assigned_to=javascript:getMyAssignments()^ORassigned_toISEMPTY^incident_stateNOT%20IN6,7,11,12^EQ&sysparm_clear_stack=true');
    // // var queue = ;
    // await page.waitForNavigation();
    //  const queue = "div[id='c13406700a0a3c1201579d1d0bc87b7f']";
    //  await page.evaluate((queue)=>{
    await page.waitFor(10000);

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
        for (var i = 0; i < 11; i++) {
            arr[i] = s[i].href;
        }
        // console.log("inside",arr[i]);  
        return arr;
    });
    const page1 = [];
    // for(var i=0;i<11;i++){

    //   page1[i] = await browser.newPage();
    //   await page1[i].goto(arr1[i]);
    //   console.log(arr1[i]);
    // }
    const page11 = await browser.newPage();
    await page11.setViewport({ width: 1366, height: 768 });
    await page11.goto(arr1[8]);
    await page11.waitFor(5000);
    // //   await page11.click('button[id=accept_incident]'); 
    await page11.waitFor(5000);
    // const form = await page11.$('button[id=incident.u_impacted_location_unlock');
    // console.log(form);
    // await form.evaluate(form => form.click());
/*   */ 
    await page11.evaluate(() => {
        // var b15 = [];
        var button15 = document.querySelectorAll("span.icon.icon-locked");
        // console.log("Sahi hai",button15[2]);
        // b15=button15[2];
        // console.log("bamai",b15);
        button15[2].click();

        // return button15;
    });
    
    await page11.waitFor(10000);
    await page11.evaluate(() => {
        var f3 = document.querySelectorAll(".form-control");
        f3[32].click();
    });
    
    await page11.waitFor(10000);
    await page11.keyboard.type("Sweden - Boras");
    await page11.keyboard.press("Enter");
    // await page.select('#incident.category', 'Application');
    await page11.evaluate(() => {
        var f4 = document.querySelectorAll(".form-control");
        f4[9].click();
        f4[9].setValue("Application");
        // f4[10].click();
        // f4[10].setValue("Request");
    });
    await page11.waitFor(5000);
    await page11.evaluate(() => {
        var f5 = document.querySelectorAll("button.form_action_button.header.action_context.btn.btn-default");
        f5[0].click();
    });
    await page11.waitFor(5000);
    
    await page11.evaluate(() => {
        var f6 = document.querySelectorAll(".form-control");
        // f4[9].click();
        // f4[9].setValue("Application");
         f6[10].click();
         f6[10].setValue("Request");
    });
    
    await page11.evaluate(() => {
        var f7 = document.querySelectorAll(".form-control");
        // f4[9].click();
        // f4[9].setValue("Application");
         f7[39].click();
         f7[39].setValue("//Ignore");
    });
    
    await page11.waitFor(5000);
    // await page11.keyboard.type("//Processed");
    await page11.evaluate(() => {
        var f8 = document.querySelectorAll(".form-control");
        // f4[9].click();
        // f4[9].setValue("Application");
         f8[40].click();
         f8[40].setValue("resolve");
         
    });
    // await page11.keyboard.press("Enter");
    await page11.evaluate(() => {
        var f9 = document.querySelectorAll("button.form_action_button.header.action_context.btn.btn-default");
        f9[5].click();
    });
    await page11.waitFor(5000);
    await page11.evaluate(() => {
        var f10 = document.querySelectorAll(".form-control");
        // f4[9].click();
        // f4[9].setValue("Application");
         f10[41].click();
         f10[41].setValue("workaround");
         
    });
    await page11.waitFor(5000);
    await page11.evaluate(() => {
        var f11 = document.querySelectorAll("button.form_action_button.header.action_context.btn.btn-default");
        f11[0].click();
    });
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
    
}

run();