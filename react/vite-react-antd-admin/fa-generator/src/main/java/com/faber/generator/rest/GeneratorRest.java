package com.faber.generator.rest;

import com.faber.core.vo.msg.TableRet;
import com.faber.generator.service.GeneratorService;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.Map;

/**
 */
@Controller
@RequestMapping("/base/generator")
public class GeneratorRest {

    @Autowired
    private GeneratorService generatorService;

    /**
     * 列表
     */
    @ResponseBody
    @RequestMapping("/page")
    public TableRet<Map<String, Object>> list(@RequestParam Map<String, Object> params) {
        List<Map<String, Object>> result = generatorService.queryList(params);
        int total = generatorService.queryTotal(params);
        return new TableRet<Map<String, Object>>(total, result);
    }

    /**
     * 生成代码
     */
    @RequestMapping("/code")
    public void code(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String[] tableNames = new String[]{};
        String tables = request.getParameter("tables");
        tableNames = tables.split(",");

        byte[] data = generatorService.generatorCode(tableNames);

        response.reset();
        response.setHeader("Content-Disposition", "attachment; filename=\"ag-admin-code.zip\"");
        response.addHeader("Content-Length", "" + data.length);
        response.setContentType("application/octet-stream; charset=UTF-8");

        IOUtils.write(data, response.getOutputStream());
    }
}
