import { Controller, Get } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { RequirePermission } from '../../common/auth/decorators/permissions.decorator';


@Controller('dashboard')
export class DashboardController {


constructor(
 private readonly dashboardService: DashboardService
){}



@Get('overview')
@RequirePermission('analytics.read')
overview(){

return this.dashboardService.overview();

}


}