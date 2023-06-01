import {Request, Response} from "express"
import {instanceToPlain} from "class-transformer"
import { listSellerCarsService } from "../../services/car/listSellerCars.service"

export const listSellerCarsController = async (req: Request, res: Response) => {

    const returned = await listSellerCarsService(req.params.id)

    return res.status(200).json(instanceToPlain(returned))

}