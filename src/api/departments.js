import request from '@/utils/request'
/** **
 *
 *  获取组织架构的数据
 *
 */
export function getDepartments() {
  // 在钩子函数中调用接口
  return request({
    url: '/company/department'
  })
}
/** ***
 * 删除组织架构的部门
 * * */
export function delDepartment(id) {
  return request({
    ulr: ` /company/department/${id}`,
    method: 'delete' // 接口满足restful接口规范
    // 同样的地址 不同的方法 执行不同的业务
    // delete 删除业务
    // get 获取业务
    // post 新增或者添加业务
    // put 修改业务
  })
}

/** *
 * 新增部门接口
 */
export function addDepartment(data) {
  return request({
    url: '/company/department',
    method: 'post',
    data // axios的body参数,data
  })
}