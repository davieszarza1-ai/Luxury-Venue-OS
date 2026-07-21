import { Controller, Get } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { RequirePermission } from '../../common/auth/decorators/permissions.decorator';


@Controller('reports')
export class ReportsController {


constructor(
 private readonly reportsService: ReportsService
){}



@Get('overview')
@RequirePermission('reports.read')
async overview(){

 return this.reportsService.overview();

}


}