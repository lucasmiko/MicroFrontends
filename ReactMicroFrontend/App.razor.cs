using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactMicroFrontend
{
    public partial class App
    {
        [Inject]
        IJSRuntime Jsr { get; set; }

        protected override async Task OnAfterRenderAsync(bool firstRender)
        {
            //renderJs here is the name of our
            //javascript function which will render our React app
            await Jsr.InvokeVoidAsync("renderApp");
            await base.OnAfterRenderAsync(firstRender);

        }
    }
}
