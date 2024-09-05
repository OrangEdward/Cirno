/*document.getElementById('start-button').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: selectOption
      });
    });
  });
  
  function selectOption() {
    // 定位到包含下拉栏的父 div
    const sortDiv = document.querySelector('#perPageDiv');
    
    if (sortDiv) {
      // 展开下拉栏
      const dropdown = sortDiv.querySelector('.sort-list');
      if (dropdown) {
        dropdown.style.display = 'block'; // 展开下拉栏
  
        // 选择特定的 <li> 元素
        const targetItem = dropdown.querySelector('li[data-val="50"]');
        if (targetItem) {
          // 清除之前选中的状态
          const items = dropdown.querySelectorAll('li');
          items.forEach(item => item.classList.remove('cur'));
  
          // 选中目标元素
          targetItem.classList.add('cur'); // 添加 'cur' class 表示选中状态
          targetItem.style.backgroundColor = 'yellow'; // 添加背景色来表示选中
          targetItem.querySelector('a').click();
        } else {
          console.error('没有找到 data-val="50" 的 <li> 元素');
        }
      } else {
        console.error('没有找到下拉栏元素');
      }
    } else {
      console.error('没有找到包含下拉栏的 div 元素');
    }
    const checkbox = document.querySelector('#selectCheckAll1');
    if (checkbox) {
      // 模拟点击来选中复选框
      checkbox.click(); // 执行点击操作来选中复选框
    } else {
      console.error('没有找到复选框元素');
    }
  
  }
  */
/*document.getElementById('select-item-button').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: selectDropdownItem
      });
    });
  });
  
  document.getElementById('click-checkbox-button').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: clickCheckbox
      });
    });
  });
  
  function selectDropdownItem() {
    // 定位到包含下拉栏的父 div
    const sortDiv = document.querySelector('#perPageDiv');
    
    if (sortDiv) {
      // 展开下拉栏
      const dropdown = sortDiv.querySelector('.sort-list');
      if (dropdown) {
        dropdown.style.display = 'block'; // 展开下拉栏
  
        // 选择特定的 <li> 元素
        const targetItem = dropdown.querySelector('li[data-val="50"]');
        if (targetItem) {
          // 清除之前选中的状态
          const items = dropdown.querySelectorAll('li');
          items.forEach(item => item.classList.remove('cur'));
  
          // 选中目标元素
          targetItem.classList.add('cur'); // 添加 'cur' class 表示选中状态
          targetItem.style.backgroundColor = 'yellow'; // 添加背景色来表示选中
  
          // 执行点击操作
          targetItem.querySelector('a').click(); // 执行点击操作
        } else {
          console.error('没有找到 data-val="50" 的 <li> 元素');
        }
      } else {
        console.error('没有找到下拉栏元素');
      }
    } else {
      console.error('没有找到包含下拉栏的 div 元素');
    }
  }
  
  function clickCheckbox() {
    // 选中复选框
    const checkbox = document.querySelector('#selectCheckAll1');
    if (checkbox) {
      // 模拟点击来选中复选框
      checkbox.click(); // 执行点击操作来选中复选框
    } else {
      console.error('没有找到复选框元素');
    }
  }*/
/*    document.getElementById('select-item-button').addEventListener('click', () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: selectDropdownItem
          });
        });
      });
      
      document.getElementById('click-checkbox-button').addEventListener('click', () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: clickCheckbox
          });
        });
      });
      
      function selectDropdownItem() {
        // 定位到包含下拉栏的父 div
        const sortDiv = document.querySelector('#perPageDiv');
        
        if (sortDiv) {
          // 展开下拉栏
          const dropdown = sortDiv.querySelector('.sort-list');
          if (dropdown) {
            dropdown.style.display = 'block'; // 展开下拉栏
      
            // 添加延迟以确保下拉框完全展开
            setTimeout(() => {
              // 选择特定的 <li> 元素
              const targetItem = dropdown.querySelector('li[data-val="50"]');
              if (targetItem) {
                // 清除之前选中的状态
                const items = dropdown.querySelectorAll('li');
                items.forEach(item => item.classList.remove('cur'));
      
                // 选中目标元素
                targetItem.classList.add('cur'); // 添加 'cur' class 表示选中状态
                targetItem.style.backgroundColor = 'yellow'; // 添加背景色来表示选中
      
                // 执行点击操作
                targetItem.querySelector('a').click(); // 执行点击操作
              } else {
                console.error('没有找到 data-val="50" 的 <li> 元素');
              }
            }, 500); // 延迟时间可以根据实际情况调整
          } else {
            console.error('没有找到下拉栏元素');
          }
        } else {
          console.error('没有找到包含下拉栏的 div 元素');
        }
      }
      
      function clickCheckbox() {
        // 选中复选框
        const checkbox = document.querySelector('#selectCheckAll1');
        if (checkbox) {
          // 模拟点击来选中复选框
          checkbox.click(); // 执行点击操作来选中复选框
        } else {
          console.error('没有找到复选框元素');
        }
      }*/
      
/*        document.getElementById('select-item-button').addEventListener('click', () => {
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
              chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: selectDropdownItem
              });
            });
          });
          
          document.getElementById('click-checkbox-button').addEventListener('click', () => {
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
              chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: clickCheckbox
              });
            });
          });
          
          function selectDropdownItem() {
            // 定位到包含下拉栏的父 div
            const sortDiv = document.querySelector('#perPageDiv');
            
            if (sortDiv) {
              // 展开下拉栏
              const dropdown = sortDiv.querySelector('.sort-list');
              if (dropdown) {
                dropdown.style.display = 'block'; // 展开下拉栏
          
                // 选择特定的 <li> 元素
                const targetItem = dropdown.querySelector('li[data-val="50"]');
                if (targetItem) {
                  // 清除之前选中的状态
                  const items = dropdown.querySelectorAll('li');
                  items.forEach(item => item.classList.remove('cur'));
          
                  // 选中目标元素
                  targetItem.classList.add('cur'); // 添加 'cur' class 表示选中状态
                  targetItem.style.backgroundColor = 'yellow'; // 添加背景色来表示选中
          
                  // 执行点击操作
                  targetItem.querySelector('a').click(); // 执行点击操作
                } else {
                  console.error('没有找到 data-val="50" 的 <li> 元素');
                }
              } else {
                console.error('没有找到下拉栏元素');
              }
            } else {
              console.error('没有找到包含下拉栏的 div 元素');
            }
          }
          
          function clickCheckbox() {
            // 选中复选框
            const checkbox = document.querySelector('#selectCheckAll1');
            if (checkbox) {
              // 模拟点击来选中复选框
              checkbox.click(); // 执行点击操作来选中复选框
            } else {
              console.error('没有找到复选框元素');
            }
          }
document.getElementById('select-item-button').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: selectDropdownItem
    });
  });
});

document.getElementById('click-checkbox-button').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: clickCheckbox
    });
  });
});

function selectDropdownItem() {
  // 定位到包含下拉栏的父 div
  const sortDiv = document.querySelector('#perPageDiv');
  
  if (sortDiv) {
    // 展开下拉栏
    const dropdown = sortDiv.querySelector('.sort-list');
    if (dropdown) {
      dropdown.style.display = 'block'; // 展开下拉栏

      // 选择特定的 <li> 元素
      const targetItem = dropdown.querySelector('li[data-val="50"]');
      if (targetItem) {
        // 清除之前选中的状态
        const items = dropdown.querySelectorAll('li');
        items.forEach(item => item.classList.remove('cur'));

        // 选中目标元素
        targetItem.classList.add('cur'); // 添加 'cur' class 表示选中状态
        targetItem.style.backgroundColor = 'yellow'; // 添加背景色来表示选中

        // 执行点击操作
        targetItem.querySelector('a').click(); // 执行点击操作
      } else {
        console.error('没有找到 data-val="50" 的 <li> 元素');
      }
    } else {
      console.error('没有找到下拉栏元素');
    }
  } else {
    console.error('没有找到包含下拉栏的 div 元素');
  }
}

function clickCheckbox() {
  // 选中复选框
  const checkbox = document.querySelector('#selectCheckAll1');
  if (checkbox) {
    // 模拟点击来选中复选框
    checkbox.click(); // 执行点击操作来选中复选框
  } else {
    console.error('没有找到复选框元素');
  }
}
*/
/*document.getElementById('select-item-button').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: selectDropdownItem
      });
    });
  });
  
  document.getElementById('click-checkbox-button').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: clickCheckbox
      });
    });
  });
  
  function selectDropdownItem() {
    // 定位到包含下拉栏的父 div
    const sortDiv = document.querySelector('#perPageDiv');
    
    if (sortDiv) {
      // 展开下拉栏
      const dropdown = sortDiv.querySelector('.sort-list');
      if (dropdown) {
        dropdown.style.display = 'block'; // 展开下拉栏
  
        // 选择特定的 <li> 元素
        const targetItem = dropdown.querySelector('li[data-val="50"]');
        if (targetItem) {
          // 清除之前选中的状态
          const items = dropdown.querySelectorAll('li');
          items.forEach(item => item.classList.remove('cur'));
  
          // 选中目标元素
          targetItem.classList.add('cur'); // 添加 'cur' class 表示选中状态
          targetItem.style.backgroundColor = 'yellow'; // 添加背景色来表示选中
  
          // 执行点击操作
          targetItem.querySelector('a').click(); // 执行点击操作
        } else {
          console.error('没有找到 data-val="50" 的 <li> 元素');
        }
      } else {
        console.error('没有找到下拉栏元素');
      }
    } else {
      console.error('没有找到包含下拉栏的 div 元素');
    }
  }
  
  function clickCheckbox() {
    // 选中复选框
    const checkbox = document.querySelector('#selectCheckAll1');
    if (checkbox) {
      // 模拟点击来选中复选框
      checkbox.click(); // 执行点击操作来选中复选框
    } else {
      console.error('没有找到复选框元素');
    }
  }  */
 
 /*这他妈怎么点了不动啊
 
    document.getElementById('select-item-button').addEventListener('click', () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: SelectDropdownItem
          });
        });
      });
      
      document.getElementById('click-checkbox-button').addEventListener('click', () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: clickCheckbox
          });
        });
      });

      function selectDropdownItem() {
        // 定位到包含下拉栏的父 div
        const sortDiv = document.querySelector('#perPageDiv');
        
        if (sortDiv) {
          // 展开下拉栏
          const dropdown = sortDiv.querySelector('.sort-list');
          if (dropdown) {
            dropdown.style.display = 'block'; // 展开下拉栏
      
            // 确保下拉框完全展开后再执行选择
            setTimeout(() => {
              // 选择特定的 <li> 元素
              const targetItem = dropdown.querySelector('li[data-val="50"]');
              if (targetItem) {
                // 清除之前选中的状态
                const items = dropdown.querySelectorAll('li');
                items.forEach(item => item.classList.remove('cur'));
      
                // 选中目标元素
                targetItem.classList.add('cur'); // 添加 'cur' class 表示选中状态
                targetItem.style.backgroundColor = 'yellow'; // 添加背景色来表示选中
      
                // 执行点击操作
                targetItem.querySelector('a').click(); // 执行点击操作
              } else {
                console.error('没有找到 data-val="50" 的 <li> 元素');
              }
            }, 100); // 延迟时间可以根据实际情况调整
          } else {
            console.error('没有找到下拉栏元素');
          }
        } else {
          console.error('没有找到包含下拉栏的 div 元素');
        }
      }
      
      function clickCheckbox() {
        // 选中复选框
        const checkbox = document.querySelector('#selectCheckAll1');
        if (checkbox) {
          // 模拟点击来选中复选框
          checkbox.click(); // 执行点击操作来选中复选框
        } else {
          console.error('没有找到复选框元素');
        }
      }      */



/*
        document.getElementById('select-item-button').addEventListener('click', () => {
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
              chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: selectDropdownItem
              });
            });
          });
          
          document.getElementById('click-checkbox-button').addEventListener('click', () => {
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
              chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: clickCheckbox
              });
            });
          });
          
          function selectDropdownItem() {
            // 定位到包含下拉栏的父 div
            const sortDiv = document.querySelector('#perPageDiv');
            
            if (sortDiv) {
              // 展开下拉栏
              const dropdown = sortDiv.querySelector('.sort-list');
              if (dropdown) {
                dropdown.style.display = 'block'; // 展开下拉栏
          
                // 选择特定的 <li> 元素
                const targetItem = dropdown.querySelector('li[data-val="50"]');
                if (targetItem) {
                  // 清除之前选中的状态
                  const items = dropdown.querySelectorAll('li');
                  items.forEach(item => item.classList.remove('cur'));
          
                  // 选中目标元素
                  targetItem.classList.add('cur'); // 添加 'cur' class 表示选中状态
                  targetItem.style.backgroundColor = 'yellow'; // 添加背景色来表示选中
          
                  // 执行点击操作
                  targetItem.querySelector('a').click(); // 执行点击操作
                } else {
                  console.error('没有找到 data-val="50" 的 <li> 元素');
                }
              } else {
                console.error('没有找到下拉栏元素');
              }
            } else {
              console.error('没有找到包含下拉栏的 div 元素');
            }
          }
          
          function clickCheckbox() {
            // 选中复选框
            const checkbox = document.querySelector('#selectCheckAll1');
            if (checkbox) {
              // 模拟点击来选中复选框
              checkbox.click(); // 执行点击操作来选中复选框
            } else {
              console.error('没有找到复选框元素');
            }
          }          */
 /*           document.getElementById('select-item-button').addEventListener('click', () => {
                chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                  chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    function: selectDropdownItem
                  });
                });
              });
              
              document.getElementById('click-checkbox-button').addEventListener('click', () => {
                chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                  chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    function: clickCheckbox
                  });
                });
              });
              
              function selectDropdownItem() {
                console.log('Running selectDropdownItem function');
                // 定位到包含下拉栏的父 div
                const sortDiv = document.querySelector('#perPageDiv');
                
                if (sortDiv) {
                  console.log('Found sortDiv');
                  // 展开下拉栏
                  const dropdown = sortDiv.querySelector('.sort-list');
                  if (dropdown) {
                    dropdown.style.display = 'block'; // 展开下拉栏
              
                    // 选择特定的 <li> 元素
                    const targetItem = dropdown.querySelector('li[data-val="50"]');
                    if (targetItem) {
                      console.log('Found targetItem');
                      // 清除之前选中的状态
                      const items = dropdown.querySelectorAll('li');
                      items.forEach(item => item.classList.remove('cur'));
              
                      // 选中目标元素
                      targetItem.classList.add('cur'); // 添加 'cur' class 表示选中状态
                      targetItem.style.backgroundColor = 'yellow'; // 添加背景色来表示选中
              
                      // 执行点击操作
                      targetItem.querySelector('a').click(); // 执行点击操作
                    } else {
                      console.error('没有找到 data-val="50" 的 <li> 元素');
                    }
                  } else {
                    console.error('没有找到下拉栏元素');
                  }
                } else {
                  console.error('没有找到包含下拉栏的 div 元素');
                }
              }
              
              function clickCheckbox() {
                console.log('Running clickCheckbox function');
                // 选中复选框
                const checkbox = document.querySelector('#selectCheckAll1');
                if (checkbox) {
                  console.log('Found checkbox');
                  // 模拟点击来选中复选框
                  checkbox.click(); // 执行点击操作来选中复选框
                } else {
                  console.error('没有找到复选框元素');
                }
              }
              */
/*              document.getElementById('select-item-button').addEventListener('click', () => {
                chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                  chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    function: selectDropdownItem
                  });
                });
              });
              
              document.getElementById('click-checkbox-button').addEventListener('click', () => {
                chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                  chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    function: clickCheckbox
                  });
                });
              });
              
              document.getElementById('click-next-page-button').addEventListener('click', () => {
                chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                  chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    function: clickNextPage
                  });
                });
              });
              
              function selectDropdownItem() {
                console.log('Running selectDropdownItem function');
                // 定位到包含下拉栏的父 div
                const sortDiv = document.querySelector('#perPageDiv');
                
                if (sortDiv) {
                  console.log('Found sortDiv');
                  // 展开下拉栏
                  const dropdown = sortDiv.querySelector('.sort-list');
                  if (dropdown) {
                    dropdown.style.display = 'block'; // 展开下拉栏
              
                    // 选择特定的 <li> 元素
                    const targetItem = dropdown.querySelector('li[data-val="50"]');
                    if (targetItem) {
                      console.log('Found targetItem');
                      // 清除之前选中的状态
                      const items = dropdown.querySelectorAll('li');
                      items.forEach(item => item.classList.remove('cur'));
              
                      // 选中目标元素
                      targetItem.classList.add('cur'); // 添加 'cur' class 表示选中状态
                      targetItem.style.backgroundColor = 'yellow'; // 添加背景色来表示选中
              
                      // 执行点击操作
                      targetItem.querySelector('a').click(); // 执行点击操作
                    } else {
                      console.error('没有找到 data-val="50" 的 <li> 元素');
                    }
                  } else {
                    console.error('没有找到下拉栏元素');
                  }
                } else {
                  console.error('没有找到包含下拉栏的 div 元素');
                }
              }
              
              function clickCheckbox() {
                console.log('Running clickCheckbox function');
                // 选中复选框
                const checkbox = document.querySelector('#selectCheckAll1');
                if (checkbox) {
                  console.log('Found checkbox');
                  // 模拟点击来选中复选框
                  checkbox.click(); // 执行点击操作来选中复选框
                } else {
                  console.error('没有找到复选框元素');
                }
              }
              
              function clickNextPage() {
                console.log('Running clickNextPage function');
                // 模拟点击下一页链接
                const nextPageLink = document.querySelector('#PageNext');
                if (nextPageLink) {
                  console.log('Found next page link');
                  // 执行点击操作
                  nextPageLink.click(); // 执行点击操作来跳转到下一页
                } else {
                  console.error('没有找到下一页链接');
                }
              }              */
/*                document.getElementById('select-item-button').addEventListener('click', () => {
                    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                      chrome.scripting.executeScript({
                        target: { tabId: tabs[0].id },
                        function: selectDropdownItem
                      });
                    });
                  });
                  
                  document.getElementById('click-checkbox-button').addEventListener('click', () => {
                    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                      chrome.scripting.executeScript({
                        target: { tabId: tabs[0].id },
                        function: clickCheckbox
                      });
                    });
                  });
                  
                  document.getElementById('click-next-page-button').addEventListener('click', () => {
                    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                      chrome.scripting.executeScript({
                        target: { tabId: tabs[0].id },
                        function: clickNextPage
                      });
                    });
                  });
                  
                  document.getElementById('execute-sequence-button').addEventListener('click', () => {
                    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                      chrome.scripting.executeScript({
                        target: { tabId: tabs[0].id },
                        function: executeButtonSequence
                      });
                    });
                  });
                  
                  function selectDropdownItem() {
                    console.log('Running selectDropdownItem function');
                    // 定位到包含下拉栏的父 div
                    const sortDiv = document.querySelector('#perPageDiv');
                    
                    if (sortDiv) {
                      console.log('Found sortDiv');
                      // 展开下拉栏
                      const dropdown = sortDiv.querySelector('.sort-list');
                      if (dropdown) {
                        dropdown.style.display = 'block'; // 展开下拉栏
                  
                        // 选择特定的 <li> 元素
                        const targetItem = dropdown.querySelector('li[data-val="50"]');
                        if (targetItem) {
                          console.log('Found targetItem');
                          // 清除之前选中的状态
                          const items = dropdown.querySelectorAll('li');
                          items.forEach(item => item.classList.remove('cur'));
                  
                          // 选中目标元素
                          targetItem.classList.add('cur'); // 添加 'cur' class 表示选中状态
                          targetItem.style.backgroundColor = 'yellow'; // 添加背景色来表示选中
                  
                          // 执行点击操作
                          targetItem.querySelector('a').click(); // 执行点击操作
                        } else {
                          console.error('没有找到 data-val="50" 的 <li> 元素');
                        }
                      } else {
                        console.error('没有找到下拉栏元素');
                      }
                    } else {
                      console.error('没有找到包含下拉栏的 div 元素');
                    }
                  }
                  
                  function clickCheckbox() {
                    console.log('Running clickCheckbox function');
                    // 选中复选框
                    const checkbox = document.querySelector('#selectCheckAll1');
                    if (checkbox) {
                      console.log('Found checkbox');
                      // 模拟点击来选中复选框
                      checkbox.click(); // 执行点击操作来选中复选框
                    } else {
                      console.error('没有找到复选框元素');
                    }
                  }
                  
                  function clickNextPage() {
                    console.log('Running clickNextPage function');
                    // 模拟点击下一页链接
                    const nextPageLink = document.querySelector('#PageNext');
                    if (nextPageLink) {
                      console.log('Found next page link');
                      // 执行点击操作
                      nextPageLink.click(); // 执行点击操作来跳转到下一页
                    } else {
                      console.error('没有找到下一页链接');
                    }
                  }
                  
                  function executeButtonSequence() {
                    console.log('Running executeButtonSequence function');
                    const iterations = 10;
                    const delay = 100; // 延迟0.1秒
                  
                    function performSequence(iterationsLeft) {
                      if (iterationsLeft > 0) {
                        // 执行第二个按钮功能
                        clickCheckbox();
                        // 延时后执行第三个按钮功能
                        setTimeout(() => {
                          clickNextPage();
                          // 再次延时后继续执行
                          setTimeout(() => {
                            performSequence(iterationsLeft - 1);
                          }, delay);
                        }, delay);
                      }
                    }
                  
                    performSequence(iterations);
                  }                  */
/*                    document.getElementById('select-item-button').addEventListener('click', () => {
                        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                          chrome.scripting.executeScript({
                            target: { tabId: tabs[0].id },
                            function: selectDropdownItem
                          });
                        });
                      });
                      
                      document.getElementById('click-checkbox-button').addEventListener('click', () => {
                        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                          chrome.scripting.executeScript({
                            target: { tabId: tabs[0].id },
                            function: clickCheckbox
                          });
                        });
                      });
                      
                      document.getElementById('click-next-page-button').addEventListener('click', () => {
                        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                          chrome.scripting.executeScript({
                            target: { tabId: tabs[0].id },
                            function: clickNextPage
                          });
                        });
                      });
                      
                      document.getElementById('execute-sequence-button').addEventListener('click', () => {
                        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                          chrome.scripting.executeScript({
                            target: { tabId: tabs[0].id },
                            function: executeButtonSequence
                          });
                        });
                      });
{
                      function selectDropdownItem() {
                        console.log('Running selectDropdownItem function');
                        const sortDiv = document.querySelector('#perPageDiv');
                        
                        if (sortDiv) {
                          console.log('Found sortDiv');
                          const dropdown = sortDiv.querySelector('.sort-list');
                          if (dropdown) {
                            dropdown.style.display = 'block'; // 展开下拉栏
                      
                            const targetItem = dropdown.querySelector('li[data-val="50"]');
                            if (targetItem) {
                              console.log('Found targetItem');
                              const items = dropdown.querySelectorAll('li');
                              items.forEach(item => item.classList.remove('cur'));
                      
                              targetItem.classList.add('cur'); // 选中目标元素
                              targetItem.style.backgroundColor = 'yellow'; // 高亮显示
                      
                              targetItem.querySelector('a').click(); // 执行点击操作
                            } else {
                              console.error('没有找到 data-val="50" 的 <li> 元素');
                            }
                          } else {
                            console.error('没有找到下拉栏元素');
                          }
                        } else {
                          console.error('没有找到包含下拉栏的 div 元素');
                        }
                      }
                      
                      function clickCheckbox() {
                        console.log('Running clickCheckbox function');
                        const checkbox = document.querySelector('#selectCheckAll1');
                        if (checkbox) {
                          console.log('Found checkbox');
                          checkbox.click(); // 执行点击操作
                        } else {
                          console.error('没有找到复选框元素');
                        }
                      }
                      
                      function clickNextPage() {
                        console.log('Running clickNextPage function');
                        const nextPageLink = document.querySelector('#PageNext');
                        if (nextPageLink) {
                          console.log('Found next page link');
                          nextPageLink.click(); // 执行点击操作
                        } else {
                          console.error('没有找到下一页链接');
                        }
                      }
                      
                      function executeButtonSequence() {
                        console.log('Running executeButtonSequence function');
                        const iterations = 10;
                        const delay = 100; // 延迟0.1秒
                      
                        function performSequence(iterationsLeft) {
                          if (iterationsLeft > 0) {
                            // 执行第二个按钮功能
                            clickCheckbox();
                            setTimeout(() => {
                              // 执行第三个按钮功能
                              clickNextPage();
                              setTimeout(() => {
                                // 再次延时后继续执行序列
                                performSequence(iterationsLeft - 1);
                              }, delay);
                            }, delay);
                          }
                        }
                      
                        performSequence(iterations);
                      }
                    }*/
                      /*document.getElementById('select-item-button').addEventListener('click', () => {
                        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                          chrome.scripting.executeScript({
                            target: { tabId: tabs[0].id },
                            function: selectDropdownItem
                          });
                        });
                      });
                      
                      document.getElementById('click-checkbox-button').addEventListener('click', () => {
                        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                          chrome.scripting.executeScript({
                            target: { tabId: tabs[0].id },
                            function: clickCheckbox
                          });
                        });
                      });
                      
                      document.getElementById('click-next-page-button').addEventListener('click', () => {
                        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                          chrome.scripting.executeScript({
                            target: { tabId: tabs[0].id },
                            function: clickNextPage
                          });
                        });
                      });
                      
                      document.getElementById('execute-sequence-button').addEventListener('click', () => {
                        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                          chrome.scripting.executeScript({
                            target: { tabId: tabs[0].id },
                            function: executeButtonSequence
                          });
                        });
                      });

                      function selectDropdownItem() {
                        console.log('Running selectDropdownItem function');
                        const sortDiv = document.querySelector('#perPageDiv');
                        
                        if (sortDiv) {
                          console.log('Found sortDiv');
                          const dropdown = sortDiv.querySelector('.sort-list');
                          if (dropdown) {
                            dropdown.style.display = 'block'; // 展开下拉栏
                    
                            const targetItem = dropdown.querySelector('li[data-val="50"]');
                            if (targetItem) {
                              console.log('Found targetItem');
                              const items = dropdown.querySelectorAll('li');
                              items.forEach(item => item.classList.remove('cur'));
                    
                              targetItem.classList.add('cur'); // 选中目标元素
                              targetItem.style.backgroundColor = 'yellow'; // 高亮显示
                    
                              targetItem.querySelector('a').click(); // 执行点击操作
                            } else {
                              console.error('没有找到 data-val="50" 的 <li> 元素');
                            }
                          } else {
                            console.error('没有找到下拉栏元素');
                          }
                        } else {
                          console.error('没有找到包含下拉栏的 div 元素');
                        }
                      }
                    
                      function clickCheckbox() {
                        console.log('Running clickCheckbox function');
                        const checkbox = document.querySelector('#selectCheckAll1');
                        if (checkbox) {
                          console.log('Found checkbox');
                          checkbox.click(); // 执行点击操作
                        } else {
                          console.error('没有找到复选框元素');
                        }
                      }
                    
                      function clickNextPage() {
                        console.log('Running clickNextPage function');
                        const nextPageLink = document.querySelector('#PageNext');
                        if (nextPageLink) {
                          console.log('Found next page link');
                          nextPageLink.click(); // 执行点击操作
                        } else {
                          console.error('没有找到下一页链接');
                        }
                      }

                      function executeButtonSequence() {
                        function clickCheckbox() {
                          console.log('Running clickCheckbox function');
                          const checkbox = document.querySelector('#selectCheckAll1');
                          if (checkbox) {
                            console.log('Found checkbox');
                            checkbox.click(); // 执行点击操作
                          } else {
                            console.error('没有找到复选框元素');
                          }
                        }
                      
                        function clickNextPage() {
                          console.log('Running clickNextPage function');
                          const nextPageLink = document.querySelector('#PageNext');
                          if (nextPageLink) {
                            console.log('Found next page link');
                            nextPageLink.click(); // 执行点击操作
                          } else {
                            console.error('没有找到下一页链接');
                          }
                        }
                      
                        function performSequence(iterationsLeft) {
                          if (iterationsLeft > 0) {
                            // 执行第二个按钮功能
                            clickCheckbox();
                            setTimeout(() => {
                              // 执行第三个按钮功能
                              clickNextPage();
                              setTimeout(() => {
                                // 再次延时后继续执行序列
                                performSequence(iterationsLeft - 1);
                              }, 2000); // 延迟2秒
                            }, 3000); // 延迟2秒
                          }
                        }
                      
                        setTimeout(() => {
                          performSequence(10); // 循环10次
                        }, 100); // 初始延迟0.1秒
                      }*/
document.getElementById('select-item-button').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: selectDropdownItem
    });
  });
});

document.getElementById('click-checkbox-button').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: clickCheckbox
    });
  });
});

document.getElementById('click-next-page-button').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: clickNextPage
    });
  });
});

document.getElementById('execute-sequence-button').addEventListener('click', () => {
  const delayInput = document.getElementById('delay-input');
  const delay = parseInt(delayInput.value, 10) || 3000; // 默认延时3000毫秒

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: executeButtonSequence,
      args: [delay] // 传递延时参数
    });
  });
});

function selectDropdownItem() {
  console.log('Running selectDropdownItem function');
  const sortDiv = document.querySelector('#perPageDiv');
  
  if (sortDiv) {
    console.log('Found sortDiv');
    const dropdown = sortDiv.querySelector('.sort-list');
    if (dropdown) {
      dropdown.style.display = 'block'; // 展开下拉栏

      const targetItem = dropdown.querySelector('li[data-val="50"]');
      if (targetItem) {
        console.log('Found targetItem');
        const items = dropdown.querySelectorAll('li');
        items.forEach(item => item.classList.remove('cur'));

        targetItem.classList.add('cur'); // 选中目标元素
        targetItem.style.backgroundColor = 'yellow'; // 高亮显示

        targetItem.querySelector('a').click(); // 执行点击操作
      } else {
        console.error('没有找到 data-val="50" 的 <li> 元素');
      }
    } else {
      console.error('没有找到下拉栏元素');
    }
  } else {
    console.error('没有找到包含下拉栏的 div 元素');
  }
}

function clickCheckbox() {
  console.log('Running clickCheckbox function');
  const checkbox = document.querySelector('#selectCheckAll1');
  if (checkbox) {
    console.log('Found checkbox');
    checkbox.click(); // 执行点击操作
  } else {
    console.error('没有找到复选框元素');
  }
}

function clickNextPage() {
  console.log('Running clickNextPage function');
  const nextPageLink = document.querySelector('#PageNext');
  if (nextPageLink) {
    console.log('Found next page link');
    nextPageLink.click(); // 执行点击操作
  } else {
    console.error('没有找到下一页链接');
  }
}

// 将所有操作的功能合并到一个脚本中
function executeButtonSequence(delay) {
  function selectDropdownItem() {
    console.log('Running selectDropdownItem function');
    const sortDiv = document.querySelector('#perPageDiv');
    
    if (sortDiv) {
      console.log('Found sortDiv');
      const dropdown = sortDiv.querySelector('.sort-list');
      if (dropdown) {
        dropdown.style.display = 'block'; // 展开下拉栏

        const targetItem = dropdown.querySelector('li[data-val="50"]');
        if (targetItem) {
          console.log('Found targetItem');
          const items = dropdown.querySelectorAll('li');
          items.forEach(item => item.classList.remove('cur'));

          targetItem.classList.add('cur'); // 选中目标元素
          targetItem.style.backgroundColor = 'yellow'; // 高亮显示

          targetItem.querySelector('a').click(); // 执行点击操作
        } else {
          console.error('没有找到 data-val="50" 的 <li> 元素');
        }
      } else {
        console.error('没有找到下拉栏元素');
      }
    } else {
      console.error('没有找到包含下拉栏的 div 元素');
    }
  }

  function clickCheckbox() {
    console.log('Running clickCheckbox function');
    const checkbox = document.querySelector('#selectCheckAll1');
    if (checkbox) {
      console.log('Found checkbox');
      checkbox.click(); // 执行点击操作
    } else {
      console.error('没有找到复选框元素');
    }
  }

  function clickNextPage() {
    console.log('Running clickNextPage function');
    const nextPageLink = document.querySelector('#PageNext');
    if (nextPageLink) {
      console.log('Found next page link');
      nextPageLink.click(); // 执行点击操作
    } else {
      console.error('没有找到下一页链接');
    }
  }

  function performSequence(iterationsLeft) {
    if (iterationsLeft > 0) {
      // 执行第二个按钮功能
      clickCheckbox();
      setTimeout(() => {
        // 执行第三个按钮功能
        clickNextPage();
        setTimeout(() => {
          // 再次延时后继续执行序列
          performSequence(iterationsLeft - 1);
        }, delay); // 使用用户输入的延迟
      }, delay); // 使用用户输入的延迟
    }
  }

  // 首先选择下拉框的元素
  selectDropdownItem();
  setTimeout(() => {
    performSequence(10); // 循环10次
  }, delay); // 使用用户输入的延迟
}

