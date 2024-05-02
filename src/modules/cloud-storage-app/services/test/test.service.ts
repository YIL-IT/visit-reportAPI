import { Injectable } from '@nestjs/common';
import { log } from 'console';
import { dbConnection } from 'src/app.module';
import { AuthService } from 'src/auth/services/auth.service';
import { Insertdetails, Insertempdetails } from 'src/models/dto/user.dto';
@Injectable()
export class TestService {
  //Get method

  constructor(private passEncrypt: AuthService) {}

  async empDetails() {
    try {
      const terms = await dbConnection.query(`
      SELECT * FROM yuken.employee_data;

     `);

      // console.log(terms, 'terms');

      return terms;
    } catch (error) {
      throw error;
    }
  }

  //post

  async insertDetails(details) {
    try {
      const qrCodesArray = details.qr_codes;
  
      if (!qrCodesArray || qrCodesArray.length === 0) {
        throw new Error('No QR codes found in details.');
      }
  
      // Extract field names from all QR codes in the array
      const allFields = qrCodesArray.map((qrData) => Object.keys(qrData));
      const commonFields = allFields;
      const fieldList = commonFields.join(', ');
  
      let placeholders = '';
      const values = [];
  
      // Generate placeholders for all values
      const placeholdersForRow = qrCodesArray.map(() => '?').join(', ');
      placeholders += `(${placeholdersForRow})`;
  
      qrCodesArray.forEach((qrData, index) => {
        const qrDataValues = Object.values(qrData);
  
        // Push values from QR data into values array
        values.push(...qrDataValues);
  
        // Add comma if not last QR code row
        if (index < qrCodesArray.length - 1) {
          placeholders;
        }
      });
  
      const sqlQuery = `INSERT INTO yuken.yil_scan (${fieldList}) VALUES ${placeholders};`;
  
      console.log(sqlQuery);
  
      // Execute the SQL query asynchronously
      await dbConnection.query(sqlQuery, values);
    } catch (error) {
      console.error('Error occurred while inserting details:', error);
      throw error;
    }
  }
  

  //post

  //   // /put

  // async UpdateUserDetails(username: any, details: UpdateUserDetails) {

  //   try {
  //     let putdata: any;
  //     // console.log(details);
  //     // console.log(details.scheduledate);

  //     putdata = await dbConnection.query(`
  //         UPDATE vmail.mailbox
  //         SET
  //         password = '${details.password}',
  //         name  = '${details.name}',
  //         language = '${details.language}',
  //         quota = '${details.quota}'
  //         Where username ='${username}';

  //           `);
  //     return true;
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  //delete method

  // async deletefile(username) {
  //   let deletefile: any;
  //   try {
  //     deletefile = await dbConnection.query(`
  //       DELETE FROM vmail.mailbox WHERE username='${username}';
  //     `);
  //     return true;
  //   } catch (error) { }
  // }
  //delete method
}
