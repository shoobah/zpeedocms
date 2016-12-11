using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace ZpeedoCMS.Controllers
{
    [Route("api/[controller]")]
    public class ContentDescriptorController : Controller
    {
        [HttpGet("[action]")]
        public object GetDescriptors()
        {
            var file = System.IO.File.OpenText(@".\wwwroot\mockdata\contentDescriptors.json");
            var theData = file.ReadToEnd();
            file.Dispose();
            return Newtonsoft.Json.JsonConvert.DeserializeObject(theData);
        }
    }
}