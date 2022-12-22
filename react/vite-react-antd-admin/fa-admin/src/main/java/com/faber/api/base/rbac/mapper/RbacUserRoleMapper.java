package com.faber.api.base.rbac.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.faber.api.base.rbac.entity.RbacUserRole;
import com.faber.api.base.rbac.vo.RbacUserRoleRetVo;
import com.faber.api.base.rbac.vo.query.RbacUserRoleQueryVo;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * BASE-用户角色关联表
 * 
 * @author Farando
 * @email faberxu@gmail.com
 * @date 2022-09-19 11:40:40
 */
public interface RbacUserRoleMapper extends BaseMapper<RbacUserRole> {

    List<RbacUserRoleRetVo> pageVo(@Param("query") RbacUserRoleQueryVo query, @Param("sorter") String sorter);

    int countByUserIdAndLinkUrl(@Param("userId") String userId, @Param("linkUrl") String linkUrl);
	
}
