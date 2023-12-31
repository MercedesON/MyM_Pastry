import express, { Application } from 'express';
import cors from 'cors';
import routesCake from '../routes/cake.route';
import routesUser from '../routes/user.route';
import { Cake } from './cake';
import { User } from './user';

class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();

    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Application running on the port ' + this.port);
        })
    }
    routes() {
        this.app.use('/api/cakes', routesCake);
        this.app.use('/api/users', routesUser);
    }
    midlewares() {
        //Parseo body
        this.app.use(express.json());

        // Cors
        this.app.use(cors());
    }

    async dbConnect() {
        try {
            await Cake.sync()
            //await Cake.sync({ force: true });
            await User.sync();
            //await User.sync({ force: true });
        } catch (error) {
            console.error('Unable to connect to the database:', error);

        }
    }

}
export default Server;