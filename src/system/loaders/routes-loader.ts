class RoutesLoader
{
    static loadRoutes(app:any | null) {
        let fs = require('fs');
        let path = require('path');

        fs.readdirSync('src/app/routes').forEach( (file:any) => {            
            // console.log(file);
            let route = 'src/app/routes/'+file;
            // console.log(path.extname(route));

            if(path.extname(route) == '.ts') {
                require(route)(app);
            }
        });
    }
}
export default RoutesLoader;