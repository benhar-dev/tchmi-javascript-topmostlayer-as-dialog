// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.758.8/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var tchmi_usercontrol_as_dialog;
        (function (tchmi_usercontrol_as_dialog) {
            function ShowOkCancelDialog(ctx, title, content) {

                var myPopup = $(`
                 <div id="popup" style="background-color: #fff; padding: 20px; border-radius: 8px; max-width: 300px; text-align: left; margin: 0 auto;">
                    <p style="font-size: 24px; font-weight: bold; margin-top: 0px; margin-bottom: 10px;">${title}</p>
                    <p style="font-size: 16px; margin-bottom: 20px;">${content}</p>

                    <div>
                      <button id="okButton" style="border: none; padding: 8px 16px; border-radius: 4px; margin-right: 10px; cursor: pointer; font-weight: 500; background-color: #007bff; color: #fff;">OK</button>
                      <button id="cancelButton" style="border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; font-weight: 500; background-color: #6c757d; color: #fff;">Cancel</button>
                    </div>
                </div>`);

                let _this = this;

                function ok() {
                    ctx.success(true);
                    TcHmi.TopMostLayer.remove(_this, myPopup);
                }

                function cancel() {                
                    ctx.success(false);
                    TcHmi.TopMostLayer.remove(_this, myPopup);
                }
            
                TcHmi.TopMostLayer.add(this, myPopup, {
                    centerHorizontal: true,
                    centerVertical: true,
                    removeCb: (data) => {
                        if (data.canceled) {
                            ctx.success(false);
                        }
                    }
                });

                $('#okButton').click(function () {
                    ok();
                });

                $('#cancelButton').click(function () {
                    cancel();
                });

                
                
            }
            tchmi_usercontrol_as_dialog.ShowOkCancelDialog = ShowOkCancelDialog;
        })(tchmi_usercontrol_as_dialog = Functions.tchmi_usercontrol_as_dialog || (Functions.tchmi_usercontrol_as_dialog = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('ShowOkCancelDialog', 'TcHmi.Functions.tchmi_usercontrol_as_dialog', TcHmi.Functions.tchmi_usercontrol_as_dialog.ShowOkCancelDialog);
