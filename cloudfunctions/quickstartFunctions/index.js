const getOpenId = require('./getOpenId/index');
const getMiniProgramCode = require('./getMiniProgramCode/index');
const createCollection = require('./createCollection/index');
const selectRecord = require('./selectRecord/index');
const updateRecord = require('./updateRecord/index');
const sumRecord = require('./sumRecord/index');
const insert = require('./dbutil/insert')
const select = require('./dbutil/select')
const del = require('./dbutil/delete')
const selectById = require('./dbutil/selectById')
const update = require('./dbutil/update')


// 云函数入口函数
exports.main = async (event, context) => {
  switch (event.type) {
    case 'update':
        console.log("开始更新")
        console.log(event)
        return await update.main(event, context)
    case 'selectById':
        return await selectById.main(event, context)
    case 'del':
      return await del.main(event, context)
    case 'select':
      return await select.main(event, context)
    case 'insert':
      return await insert.main(event, context);
    case 'getOpenId':
      return await getOpenId.main(event, context);
    case 'getMiniProgramCode':
      return await getMiniProgramCode.main(event, context);
    case 'createCollection':
      return await createCollection.main(event, context);
    case 'selectRecord':
      return await selectRecord.main(event, context);
    case 'updateRecord':
      return await updateRecord.main(event, context);
    case 'sumRecord':
      return await sumRecord.main(event, context);
  }
};
