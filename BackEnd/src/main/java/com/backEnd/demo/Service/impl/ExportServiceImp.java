package com.backEnd.demo.Service.impl;

import com.backEnd.demo.Model.User;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.CreationHelper;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import org.springframework.stereotype.Service;

@Service
public class ExportServiceImp {
    
    public static ByteArrayInputStream productExcelReport(List<User> list) throws IOException{
    String[] colums = {"Identificación","Nombre","Apellidos","Email"};
    try(ByteArrayOutputStream out = new ByteArrayOutputStream()){
        Workbook workbook = new XSSFWorkbook();
        CreationHelper creationHelper = workbook.getCreationHelper();
        
        Sheet sheet = workbook.createSheet("Estudiantes");
        sheet.autoSizeColumn(colums.length);
        
        Font headerFont = workbook.createFont();
        headerFont.setColor(IndexedColors.BLACK.getIndex());
        
        CellStyle cellStyle = workbook.createCellStyle();
        cellStyle.setFont(headerFont);
        
        //Row for header
        Row headerRow = sheet.createRow(0);
        
        //Header
        for(int col = 0; col < colums.length; col++){
            Cell cell = headerRow.createCell(col);
            cell.setCellValue(colums[col]);
            cell.setCellStyle(cellStyle);            
        }
        
        CellStyle cellStyle1 = workbook.createCellStyle();
        cellStyle1.setDataFormat(creationHelper.createDataFormat().getFormat("#"));
        
        int rowIndex = 1;
        for(User student: list){
            
            Row row = sheet.createRow(rowIndex++);
            row.createCell(0).setCellValue(student.getUsername());
            row.createCell(1).setCellValue(student.getName());
            row.createCell(2).setCellValue(student.getLastName());
            row.createCell(3).setCellValue(student.getEmail());
        }
        workbook.write(out);
        
        return new ByteArrayInputStream(out.toByteArray());
        }
    
    }
    
    
}
