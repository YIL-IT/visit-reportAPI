import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Post,
  Put,
  Query,
  Req,
} from '@nestjs/common';
import { TestService } from '../../services/test/test.service';
import ResponseInterface from 'src/models/interface/response.interface';
import { query } from 'express';
import { Insertdetails, Insertempdetails } from 'src/models/dto/user.dto';

@Controller('test')
export class TestController {
  constructor(private testservice: TestService) {}

  //Get Method



  @Get('employee-data')
  async termsAndCondition(): // @Query('country_code') country_code: string,
  // @Query('customer_id') customer_id: number,
  Promise<ResponseInterface> {
    const data = await this.testservice.empDetails();
    return {
      message: 'Get Successfully',
      statusCode: HttpStatus.OK,
      data,
    };
  }

  

  //Insert

  // @Post('Insert-emp-details')
  // async InsertEmpDetails(
  //   @Body() details: Insertempdetails,
  // ): Promise<{ statusCode: number; message: string }> {
  //   try {
  //     await this.testservice.InsertEmpDetails(details);
  //     return {
  //       statusCode: HttpStatus.OK,
  //       message: 'Data inserted successfully',
  //     };
  //   } catch (error) {
  //     return {
  //       statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
  //       message: 'Failed to insert data',
  //     };
  //   }
  // }

  @Post('insert-qr-codes')
  async InsertQrCodes(
    @Body() details: Insertdetails,
  ): Promise<{ statusCode: number; message: string }> {
    try {
      await this.testservice.insertDetails(details);
      return {
        statusCode: HttpStatus.OK,
        message: 'Data inserted successfully',
      };
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Failed to insert data',
      };
    }
  }



  // @Post('insert-qr-codes')
  // async insertQRCodes(@Body() details: Insertdetails): Promise<{ statusCode: number; message: string }> {
  //   try {
  //     await this.testservice.InsertDetails(details);
  //     return {
  //       statusCode: HttpStatus.OK,
  //       message: 'QR codes inserted successfully',
  //     };
  //   } catch (error) {
  //     console.error(error);
  //     return {
  //       statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
  //       message: 'Failed to insert QR codes',
  //     };
  //   }
  // }





 


  // /put 

    // @Put('update-admin')
    // async UpdateAdmin(
    //   @Query('type') type: number,
    //   @Body() details: UpdateAdminDetails,
    // ): Promise<ResponseInterface> {
    //   const data = await this.testservice.UpdateAdmin(type,details);
    //   if (data == true) {
    //     return {
    //       statusCode: 200,
    //       message: 'Data updated successful',
    //       data,
    //     };
    //   } else {
    //     return {
    //       statusCode: 400,
    //       message: 'Date updated Unsucessful',
    //       data,
    //     };
    //   }
    // }
 



  // // // delete methode

  // @Delete('delete-user-details')
  // async deleteuserDetails(
  //   @Query('username') username: string,
  //   @Req() req: Request,
  // ): Promise<ResponseInterface> {
  //   try {
  //     const data = await this.testservice.deletefile(username);
  //     if (data == true) {
  //       return {
  //         statusCode: 200,
  //         message: 'Data deleted successful',
  //         data,
  //       };
  //     } else {
  //       return {
  //         statusCode: 400,
  //         message: 'Data deleted Unsucessful',
  //         data,
  //       };
  //     }
  //   } catch (error) {
  //     throw error;
  //   }
  // }
  // // // delete methode



}