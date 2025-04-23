













<template>
    <div class="addEdit-block">
        <el-form
                class="detail-form-content"
                ref="ruleForm"
                :model="ruleForm"
                :rules="rules"
                label-width="80px"
                :style="{backgroundColor:addEditForm.addEditBoxColor}">
            <el-row>
                <el-col :span="12"  v-if="sessionTable !='chongwu'">
                    <el-form-item class="select" v-if="type!='info'"  label="宠物领养" prop="chongwuId">
                        <el-select v-model="ruleForm.chongwuId" filterable placeholder="请选择宠物领养" @change="chongwuChange">
                            <el-option
                                    v-for="(item,index) in chongwuOptions"
                                    v-bind:key="item.id"
                                    :label="item.chongwuName"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>

                <el-col :span="12"  v-if="sessionTable !='chongwu' ">
                    <el-form-item class="input" v-if="type!='info'"  label="宠物唯一编号" prop="chongwuUuidNumber">
                        <el-input v-model="chongwuForm.chongwuUuidNumber"
                                  placeholder="宠物唯一编号" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="宠物唯一编号" prop="chongwuUuidNumber">
                            <el-input v-model="ruleForm.chongwuUuidNumber"
                                      placeholder="宠物唯一编号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='chongwu' ">
                    <el-form-item class="input" v-if="type!='info'"  label="宠物名称" prop="chongwuName">
                        <el-input v-model="chongwuForm.chongwuName"
                                  placeholder="宠物名称" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="宠物名称" prop="chongwuName">
                            <el-input v-model="ruleForm.chongwuName"
                                      placeholder="宠物名称" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="24" v-if="sessionTable !='chongwu' ">
                    <el-form-item class="upload" v-if="type!='info' && !ro.chongwuPhoto" label="宠物照片" prop="chongwuPhoto">
                        <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (chongwuForm.chongwuPhoto || '').split(',')" :src="item" width="100" height="100">
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.chongwuPhoto" label="宠物照片" prop="chongwuPhoto">
                            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (ruleForm.chongwuPhoto || '').split(',')" :src="item" width="100" height="100">
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='chongwu' ">
                    <el-form-item class="input" v-if="type!='info'"  label="宠物类型" prop="chongwuValue">
                        <el-input v-model="chongwuForm.chongwuValue"
                                  placeholder="宠物类型" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="宠物类型" prop="chongwuValue">
                            <el-input v-model="ruleForm.chongwuValue"
                                      placeholder="宠物类型" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='chongwu' ">
                    <el-form-item class="input" v-if="type!='info'"  label="是否被领养" prop="chongwuLingyangValue">
                        <el-input v-model="chongwuForm.chongwuLingyangValue"
                                  placeholder="是否被领养" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="是否被领养" prop="chongwuLingyangValue">
                            <el-input v-model="ruleForm.chongwuLingyangValue"
                                      placeholder="是否被领养" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='yonghu'">
                    <el-form-item class="select" v-if="type!='info'"  label="用户" prop="yonghuId">
                        <el-select v-model="ruleForm.yonghuId" filterable placeholder="请选择用户" @change="yonghuChange">
                            <el-option
                                    v-for="(item,index) in yonghuOptions"
                                    v-bind:key="item.id"
                                    :label="item.yonghuName"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>

                <el-col :span="12"  v-if="sessionTable !='yonghu' ">
                    <el-form-item class="input" v-if="type!='info'"  label="昵称" prop="yonghuName">
                        <el-input v-model="yonghuForm.yonghuName"
                                  placeholder="昵称" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="昵称" prop="yonghuName">
                            <el-input v-model="ruleForm.yonghuName"
                                      placeholder="昵称" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='yonghu' ">
                    <el-form-item class="input" v-if="type!='info'"  label="会员等级" prop="huiyuandengjiValue">
                        <el-input v-model="yonghuForm.huiyuandengjiValue"
                                  placeholder="会员等级" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="会员等级" prop="huiyuandengjiValue">
                            <el-input v-model="ruleForm.huiyuandengjiValue"
                                      placeholder="会员等级" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <input id="updateId" name="id" type="hidden">
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="订单号" prop="chongwuOrderUuidNumber">
                       <el-input v-model="ruleForm.chongwuOrderUuidNumber"
                                 placeholder="订单号" clearable  :readonly="ro.chongwuOrderUuidNumber"></el-input>
                   </el-form-item>
                   <div v-else>
                       <el-form-item class="input" label="订单号" prop="chongwuOrderUuidNumber">
                           <el-input v-model="ruleForm.chongwuOrderUuidNumber"
                                     placeholder="订单号" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
            <input id="chongwuId" name="chongwuId" type="hidden">
            <input id="yonghuId" name="yonghuId" type="hidden">
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="申请人姓名" prop="chongwuOrderName">
                       <el-input v-model="ruleForm.chongwuOrderName"
                                 placeholder="申请人姓名" clearable  :readonly="ro.chongwuOrderName"></el-input>
                   </el-form-item>
                   <div v-else>
                       <el-form-item class="input" label="申请人姓名" prop="chongwuOrderName">
                           <el-input v-model="ruleForm.chongwuOrderName"
                                     placeholder="申请人姓名" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="申请人手机号" prop="chongwuOrderPhone">
                       <el-input v-model="ruleForm.chongwuOrderPhone"
                                 placeholder="申请人手机号" clearable  :readonly="ro.chongwuOrderPhone"></el-input>
                   </el-form-item>
                   <div v-else>
                       <el-form-item class="input" label="申请人手机号" prop="chongwuOrderPhone">
                           <el-input v-model="ruleForm.chongwuOrderPhone"
                                     placeholder="申请人手机号" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="申请人身份证号" prop="chongwuOrderIdNumber">
                       <el-input v-model="ruleForm.chongwuOrderIdNumber"
                                 placeholder="申请人身份证号" clearable  :readonly="ro.chongwuOrderIdNumber"></el-input>
                   </el-form-item>
                   <div v-else>
                       <el-form-item class="input" label="申请人身份证号" prop="chongwuOrderIdNumber">
                           <el-input v-model="ruleForm.chongwuOrderIdNumber"
                                     placeholder="申请人身份证号" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
                <el-col :span="24">
                    <el-form-item class="upload" v-if="type!='info' && !ro.chongwuOrderPhoto" label="申请人人像照片" prop="chongwuOrderPhoto">
                        <file-upload
                            tip="点击上传申请人人像照片"
                            action="file/upload"
                            :limit="3"
                            :multiple="true"
                            :fileUrls="ruleForm.chongwuOrderPhoto?ruleForm.chongwuOrderPhoto:''"
                            @change="chongwuOrderPhotoUploadChange"
                        ></file-upload>
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.chongwuOrderPhoto" label="申请人人像照片" prop="chongwuOrderPhoto">
                            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (ruleForm.chongwuOrderPhoto || '').split(',')" :src="item" width="100" height="100">
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="24">
                    <el-form-item class="upload" v-if="type!='info' && !ro.chongwuOrderZhengPhoto" label="申请人身份证正面照片" prop="chongwuOrderZhengPhoto">
                        <file-upload
                            tip="点击上传申请人身份证正面照片"
                            action="file/upload"
                            :limit="3"
                            :multiple="true"
                            :fileUrls="ruleForm.chongwuOrderZhengPhoto?ruleForm.chongwuOrderZhengPhoto:''"
                            @change="chongwuOrderZhengPhotoUploadChange"
                        ></file-upload>
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.chongwuOrderZhengPhoto" label="申请人身份证正面照片" prop="chongwuOrderZhengPhoto">
                            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (ruleForm.chongwuOrderZhengPhoto || '').split(',')" :src="item" width="100" height="100">
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="24">
                    <el-form-item class="upload" v-if="type!='info' && !ro.chongwuOrderFanPhoto" label="申请人身份证反面照片" prop="chongwuOrderFanPhoto">
                        <file-upload
                            tip="点击上传申请人身份证反面照片"
                            action="file/upload"
                            :limit="3"
                            :multiple="true"
                            :fileUrls="ruleForm.chongwuOrderFanPhoto?ruleForm.chongwuOrderFanPhoto:''"
                            @change="chongwuOrderFanPhotoUploadChange"
                        ></file-upload>
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.chongwuOrderFanPhoto" label="申请人身份证反面照片" prop="chongwuOrderFanPhoto">
                            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (ruleForm.chongwuOrderFanPhoto || '').split(',')" :src="item" width="100" height="100">
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="24">
                    <el-form-item class="upload" v-if="type!='info' && !ro.chongwuOrderXinyongPhoto" label="申请人信用照片" prop="chongwuOrderXinyongPhoto">
                        <file-upload
                            tip="点击上传申请人信用照片"
                            action="file/upload"
                            :limit="3"
                            :multiple="true"
                            :fileUrls="ruleForm.chongwuOrderXinyongPhoto?ruleForm.chongwuOrderXinyongPhoto:''"
                            @change="chongwuOrderXinyongPhotoUploadChange"
                        ></file-upload>
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.chongwuOrderXinyongPhoto" label="申请人信用照片" prop="chongwuOrderXinyongPhoto">
                            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (ruleForm.chongwuOrderXinyongPhoto || '').split(',')" :src="item" width="100" height="100">
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12">
                    <el-form-item class="select" v-if="type!='info'"  label="领养状态" prop="chongwuOrderTypes">
                        <el-select v-model="ruleForm.chongwuOrderTypes" placeholder="请选择领养状态">
                            <el-option
                                v-for="(item,index) in chongwuOrderTypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="领养状态" prop="chongwuOrderValue">
                        <el-input v-model="ruleForm.chongwuOrderValue"
                            placeholder="领养状态" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
            </el-row>
            <el-form-item class="btn">
                <el-button v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
                <el-button v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
                <el-button v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import styleJs from "../../../utils/style.js";
    // 数字，邮件，手机，url，身份证校验
    import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
    export default {
        data() {
            return {
                addEditForm:null,
                id: '',
                type: '',
                sessionTable : "",//登录账户所在表名
                role : "",//权限
                chongwuForm: {},
                yonghuForm: {},
                ro:{
                    chongwuOrderUuidNumber: false,
                    chongwuId: false,
                    yonghuId: false,
                    chongwuOrderName: false,
                    chongwuOrderPhone: false,
                    chongwuOrderIdNumber: false,
                    chongwuOrderPhoto: false,
                    chongwuOrderZhengPhoto: false,
                    chongwuOrderFanPhoto: false,
                    chongwuOrderXinyongPhoto: false,
                    chongwuOrderTypes: false,
                    insertTime: false,
                },
                ruleForm: {
                    chongwuOrderUuidNumber: new Date().getTime(),
                    chongwuId: '',
                    yonghuId: '',
                    chongwuOrderName: '',
                    chongwuOrderPhone: '',
                    chongwuOrderIdNumber: '',
                    chongwuOrderPhoto: '',
                    chongwuOrderZhengPhoto: '',
                    chongwuOrderFanPhoto: '',
                    chongwuOrderXinyongPhoto: '',
                    chongwuOrderTypes: '',
                    insertTime: '',
                },
                chongwuOrderTypesOptions : [],
                chongwuOptions : [],
                yonghuOptions : [],
                rules: {
                   chongwuOrderUuidNumber: [
                              { required: true, message: '订单号不能为空', trigger: 'blur' },
                          ],
                   chongwuId: [
                              { required: true, message: '宠物不能为空', trigger: 'blur' },
                          ],
                   yonghuId: [
                              { required: true, message: '用户不能为空', trigger: 'blur' },
                          ],
                   chongwuOrderName: [
                              { required: true, message: '申请人姓名不能为空', trigger: 'blur' },
                          ],
                   chongwuOrderPhone: [
                              {  required: true, message: '申请人手机号不能为空', trigger: 'blur' },
                              {  pattern: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
                                 message: '申请人手机号格式不对',
                                 trigger: 'blur'
                              }
                          ],
                   chongwuOrderIdNumber: [
                              { required: true, message: '申请人身份证号不能为空', trigger: 'blur' },
                              { pattern: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
                                message: '申请人身份证号格式有误！',
                                trigger: 'blur'
                              }
                          ],
                   chongwuOrderPhoto: [
                              { required: true, message: '申请人人像照片不能为空', trigger: 'blur' },
                          ],
                   chongwuOrderZhengPhoto: [
                              { required: true, message: '申请人身份证正面照片不能为空', trigger: 'blur' },
                          ],
                   chongwuOrderFanPhoto: [
                              { required: true, message: '申请人身份证反面照片不能为空', trigger: 'blur' },
                          ],
                   chongwuOrderXinyongPhoto: [
                              { required: true, message: '申请人信用照片不能为空', trigger: 'blur' },
                          ],
                   chongwuOrderTypes: [
                              { required: true, message: '领养状态不能为空', trigger: 'blur' },
                          ],
                   insertTime: [
                              { required: true, message: '领养时间不能为空', trigger: 'blur' },
                          ],
                }
            };
        },
        props: ["parent"],
        computed: {
        },
        created() {
            //获取当前登录用户的信息
            this.sessionTable = this.$storage.get("sessionTable");
            this.role = this.$storage.get("role");

            if (this.role != "管理员"){
            }
            this.addEditForm = styleJs.addStyle();
            this.addEditStyleChange()
            this.addEditUploadStyleChange()
            //获取下拉框信息
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=chongwu_order_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.chongwuOrderTypesOptions = data.data.list;
                    }
                });

         this.$http({
             url: `chongwu/page?page=1&limit=100`,
             method: "get"
         }).then(({ data }) => {
             if (data && data.code === 0) {
                this.chongwuOptions = data.data.list;
            }
         });
         this.$http({
             url: `yonghu/page?page=1&limit=100`,
             method: "get"
         }).then(({ data }) => {
             if (data && data.code === 0) {
                this.yonghuOptions = data.data.list;
            }
         });

        },
        mounted() {
        },
        methods: {
            // 下载
            download(file){
                window.open(`${file}`)
            },
            // 初始化
            init(id,type) {
                if (id) {
                    this.id = id;
                    this.type = type;
                }
                if(this.type=='info'||this.type=='else'){
                    this.info(id);
                }else if(this.type=='cross'){
                    var obj = this.$storage.getObj('crossObj');
                    for (var o in obj){

                      if(o=='chongwuOrderUuidNumber'){
                          this.ruleForm.chongwuOrderUuidNumber = obj[o];
                          this.ro.chongwuOrderUuidNumber = true;
                          continue;
                      }
                      if(o=='chongwuId'){
                          this.ruleForm.chongwuId = obj[o];
                          this.ro.chongwuId = true;
                          continue;
                      }
                      if(o=='yonghuId'){
                          this.ruleForm.yonghuId = obj[o];
                          this.ro.yonghuId = true;
                          continue;
                      }
                      if(o=='chongwuOrderName'){
                          this.ruleForm.chongwuOrderName = obj[o];
                          this.ro.chongwuOrderName = true;
                          continue;
                      }
                      if(o=='chongwuOrderPhone'){
                          this.ruleForm.chongwuOrderPhone = obj[o];
                          this.ro.chongwuOrderPhone = true;
                          continue;
                      }
                      if(o=='chongwuOrderIdNumber'){
                          this.ruleForm.chongwuOrderIdNumber = obj[o];
                          this.ro.chongwuOrderIdNumber = true;
                          continue;
                      }
                      if(o=='chongwuOrderPhoto'){
                          this.ruleForm.chongwuOrderPhoto = obj[o];
                          this.ro.chongwuOrderPhoto = true;
                          continue;
                      }
                      if(o=='chongwuOrderZhengPhoto'){
                          this.ruleForm.chongwuOrderZhengPhoto = obj[o];
                          this.ro.chongwuOrderZhengPhoto = true;
                          continue;
                      }
                      if(o=='chongwuOrderFanPhoto'){
                          this.ruleForm.chongwuOrderFanPhoto = obj[o];
                          this.ro.chongwuOrderFanPhoto = true;
                          continue;
                      }
                      if(o=='chongwuOrderXinyongPhoto'){
                          this.ruleForm.chongwuOrderXinyongPhoto = obj[o];
                          this.ro.chongwuOrderXinyongPhoto = true;
                          continue;
                      }
                      if(o=='chongwuOrderTypes'){
                          this.ruleForm.chongwuOrderTypes = obj[o];
                          this.ro.chongwuOrderTypes = true;
                          continue;
                      }
                      if(o=='insertTime'){
                          this.ruleForm.insertTime = obj[o];
                          this.ro.insertTime = true;
                          continue;
                      }
                    }
                }
                // 获取用户信息
                this.$http({
                    url:`${this.$storage.get("sessionTable")}/session`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        var json = data.data;
                    } else {
                        this.$message.error(data.msg);
                    }
                });
            },
            chongwuChange(id){
                this.$http({
                    url: `chongwu/info/`+id,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.chongwuForm = data.data;
                    }
                });
            },
            yonghuChange(id){
                this.$http({
                    url: `yonghu/info/`+id,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.yonghuForm = data.data;
                    }
                });
            },
            // 多级联动参数
            info(id) {
                this.$http({
                    url: `chongwuOrder/info/${id}`,
                    method: 'get'
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.ruleForm = data.data;
                        this.chongwuChange(data.data.chongwuId)
                        this.yonghuChange(data.data.yonghuId)
                        //解决前台上传图片后台不显示的问题
                        let reg=new RegExp('../../../upload','g')//g代表全部
                    } else {
                        this.$message.error(data.msg);
                    }
                });
            },
            // 提交
            onSubmit() {
                this.$refs["ruleForm"].validate(valid => {
                    if (valid) {
                        this.$http({
                            url:`chongwuOrder/${!this.ruleForm.id ? "save" : "update"}`,
                            method: "post",
                            data: this.ruleForm
                        }).then(({ data }) => {
                            if (data && data.code === 0) {
                                this.$message({
                                    message: "操作成功",
                                    type: "success",
                                    duration: 1500,
                                    onClose: () => {
                                        this.parent.showFlag = true;
                                        this.parent.addOrUpdateFlag = false;
                                        this.parent.chongwuOrderCrossAddOrUpdateFlag = false;
                                        this.parent.search();
                                        this.parent.contentStyleChange();
                                    }
                                });
                            } else {
                                this.$message.error(data.msg);
                            }
                        });
                    }
                });
            },
            // 获取uuid
            getUUID () {
                return new Date().getTime();
            },
            // 返回
            back() {
                this.parent.showFlag = true;
                this.parent.addOrUpdateFlag = false;
                this.parent.chongwuOrderCrossAddOrUpdateFlag = false;
                this.parent.contentStyleChange();
            },
            //图片
            chongwuOrderPhotoUploadChange(fileUrls){
                this.ruleForm.chongwuOrderPhoto = fileUrls;
                this.addEditUploadStyleChange()
            },
            chongwuOrderZhengPhotoUploadChange(fileUrls){
                this.ruleForm.chongwuOrderZhengPhoto = fileUrls;
                this.addEditUploadStyleChange()
            },
            chongwuOrderFanPhotoUploadChange(fileUrls){
                this.ruleForm.chongwuOrderFanPhoto = fileUrls;
                this.addEditUploadStyleChange()
            },
            chongwuOrderXinyongPhotoUploadChange(fileUrls){
                this.ruleForm.chongwuOrderXinyongPhoto = fileUrls;
                this.addEditUploadStyleChange()
            },

            addEditStyleChange() {
                this.$nextTick(()=>{
                    // input
                    document.querySelectorAll('.addEdit-block .input .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputFontColor
                        el.style.fontSize = this.addEditForm.inputFontSize
                        el.style.borderWidth = this.addEditForm.inputBorderWidth
                        el.style.borderStyle = this.addEditForm.inputBorderStyle
                        el.style.borderColor = this.addEditForm.inputBorderColor
                        el.style.borderRadius = this.addEditForm.inputBorderRadius
                        el.style.backgroundColor = this.addEditForm.inputBgColor
                    })
                    document.querySelectorAll('.addEdit-block .input .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputLableColor
                        el.style.fontSize = this.addEditForm.inputLableFontSize
                    })
                    // select
                    document.querySelectorAll('.addEdit-block .select .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectFontColor
                        el.style.fontSize = this.addEditForm.selectFontSize
                        el.style.borderWidth = this.addEditForm.selectBorderWidth
                        el.style.borderStyle = this.addEditForm.selectBorderStyle
                        el.style.borderColor = this.addEditForm.selectBorderColor
                        el.style.borderRadius = this.addEditForm.selectBorderRadius
                        el.style.backgroundColor = this.addEditForm.selectBgColor
                    })
                    document.querySelectorAll('.addEdit-block .select .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectLableColor
                        el.style.fontSize = this.addEditForm.selectLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .select .el-select__caret').forEach(el=>{
                        el.style.color = this.addEditForm.selectIconFontColor
                        el.style.fontSize = this.addEditForm.selectIconFontSize
                    })
                    // date
                    document.querySelectorAll('.addEdit-block .date .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateFontColor
                        el.style.fontSize = this.addEditForm.dateFontSize
                        el.style.borderWidth = this.addEditForm.dateBorderWidth
                        el.style.borderStyle = this.addEditForm.dateBorderStyle
                        el.style.borderColor = this.addEditForm.dateBorderColor
                        el.style.borderRadius = this.addEditForm.dateBorderRadius
                        el.style.backgroundColor = this.addEditForm.dateBgColor
                    })
                    document.querySelectorAll('.addEdit-block .date .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateLableColor
                        el.style.fontSize = this.addEditForm.dateLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .date .el-input__icon').forEach(el=>{
                        el.style.color = this.addEditForm.dateIconFontColor
                        el.style.fontSize = this.addEditForm.dateIconFontSize
                        el.style.lineHeight = this.addEditForm.dateHeight
                    })
                    // upload
                    let iconLineHeight = parseInt(this.addEditForm.uploadHeight) - parseInt(this.addEditForm.uploadBorderWidth) * 2 + 'px'
                    document.querySelectorAll('.addEdit-block .upload .el-upload--picture-card').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.uploadHeight
                        el.style.color = this.addEditForm.uploadLableColor
                        el.style.fontSize = this.addEditForm.uploadLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-icon-plus').forEach(el=>{
                        el.style.color = this.addEditForm.uploadIconFontColor
                        el.style.fontSize = this.addEditForm.uploadIconFontSize
                        el.style.lineHeight = iconLineHeight
                        el.style.display = 'block'
                    })
                    // 多文本输入框
                    document.querySelectorAll('.addEdit-block .textarea .el-textarea__inner').forEach(el=>{
                        el.style.height = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaFontColor
                        el.style.fontSize = this.addEditForm.textareaFontSize
                        el.style.borderWidth = this.addEditForm.textareaBorderWidth
                        el.style.borderStyle = this.addEditForm.textareaBorderStyle
                        el.style.borderColor = this.addEditForm.textareaBorderColor
                        el.style.borderRadius = this.addEditForm.textareaBorderRadius
                        el.style.backgroundColor = this.addEditForm.textareaBgColor
                    })
                    document.querySelectorAll('.addEdit-block .textarea .el-form-item__label').forEach(el=>{
                        // el.style.lineHeight = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaLableColor
                        el.style.fontSize = this.addEditForm.textareaLableFontSize
                    })
                    // 保存
                    document.querySelectorAll('.addEdit-block .btn .btn-success').forEach(el=>{
                        el.style.width = this.addEditForm.btnSaveWidth
                        el.style.height = this.addEditForm.btnSaveHeight
                        el.style.color = this.addEditForm.btnSaveFontColor
                        el.style.fontSize = this.addEditForm.btnSaveFontSize
                        el.style.borderWidth = this.addEditForm.btnSaveBorderWidth
                        el.style.borderStyle = this.addEditForm.btnSaveBorderStyle
                        el.style.borderColor = this.addEditForm.btnSaveBorderColor
                        el.style.borderRadius = this.addEditForm.btnSaveBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnSaveBgColor
                    })
                    // 返回
                    document.querySelectorAll('.addEdit-block .btn .btn-close').forEach(el=>{
                        el.style.width = this.addEditForm.btnCancelWidth
                        el.style.height = this.addEditForm.btnCancelHeight
                        el.style.color = this.addEditForm.btnCancelFontColor
                        el.style.fontSize = this.addEditForm.btnCancelFontSize
                        el.style.borderWidth = this.addEditForm.btnCancelBorderWidth
                        el.style.borderStyle = this.addEditForm.btnCancelBorderStyle
                        el.style.borderColor = this.addEditForm.btnCancelBorderColor
                        el.style.borderRadius = this.addEditForm.btnCancelBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnCancelBgColor
                    })
                })
            },
            addEditUploadStyleChange() {
                this.$nextTick(()=>{
                    document.querySelectorAll('.addEdit-block .upload .el-upload-list--picture-card .el-upload-list__item').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                })
            },
        }
    };
</script>
<style lang="scss">
.editor{
  height: 500px;

  & /deep/ .ql-container {
	  height: 310px;
  }
}
.amap-wrapper {
  width: 100%;
  height: 500px;
}
.search-box {
  position: absolute;
}
.addEdit-block {
	margin: -10px;
}
.detail-form-content {
	padding: 12px;
}
.btn .el-button {
  padding: 0;
}</style>

